import { get } from 'lodash';

export const mapperScheduler = (apiResponse) => {
  const stopInfo = get(apiResponse, 'stop-schedule.stop', {});
  const allShedules = get(apiResponse, 'stop-schedule.route-schedules', []);

  const shedules = allShedules.reduce((acc, curr, index) => {
    const routeInfo = curr.route;
    const closetTimes = curr["scheduled-stops"].slice(0, 4);
    const montendRoutes = closetTimes.map(route => {
      return {
        id: (index + 1),
        number: routeInfo.number,
        name:  route.variant.name,
        timeScheduled: route.times.arrival.scheduled,
        timeEstimated: route.times.arrival.estimated,
      }
    });

    const allRoutes = [ ...acc, ...montendRoutes];
    return allRoutes;
  }, []);
  return { stopInfo, shedules };
}

export const mapperBusRouterPerStop = (apiResponse) => {
  const fullInfo = get(apiResponse, 'routes', []);
  const routes = fullInfo.map((route) => {
    return route.number;
  });
  return routes;
}

export const stopInfo = {
  id: '',
  name: '',
  stopNumber: '',
  address: '',
  buses: [],
  schedules: [
    {
      number: '',
      name: '',

    }
  ]
}

// 10628