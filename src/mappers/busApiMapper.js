import { get, sortBy } from 'lodash';
import moment from 'moment';
import uuid from 'uuid';

const getHourFromDateIso = date => moment(date).format('h:mm:ss')
const getNameRoute = name => {
  const splited = name.split(' ')
  const [ a, b ] = splited.reverse();
  return `${b} ${a}`;
}
export const mapperScheduler = (apiResponse) => {
  const stopInfo = get(apiResponse, 'stop-schedule.stop', {});
  const allShedules = get(apiResponse, 'stop-schedule.route-schedules', []);

  const shedulesUordened = allShedules.reduce((acc, curr, index) => {
    const routeInfo = curr.route;
    const closetTimes = curr["scheduled-stops"].slice(0, 4);
    const montendRoutes = closetTimes.map(route => {

      return {
        id: uuid(),
        number: routeInfo.number,
        name:  getNameRoute(route.variant.name),
        timeScheduled: getHourFromDateIso(route.times.arrival.scheduled),
        timeEstimated: getHourFromDateIso(route.times.arrival.estimated),
      }
    });

    const allRoutes = [ ...acc, ...montendRoutes];
    return allRoutes;
  }, []);
  const shedules = sortBy(shedulesUordened, ['timeEstimated','number'])
  return { stopInfo, shedules };
}

export const mapperBusRouterPerStop = (apiResponse) => {
  const fullInfo = get(apiResponse, 'routes', []);
  const routes = fullInfo.map((route) => {
    return route.number;
  });
  return routes;
}

// 10628