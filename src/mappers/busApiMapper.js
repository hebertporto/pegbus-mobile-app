import { get } from 'lodash';

export const mapperScheduler = (apiResponse) => {
  const stopInfo = get('stop-schedule.stop', {});
  const allShedules = get('stop-schedule.schedules', []);
  const shedules = allShedules.reduce((acc, cur) => {
    // curr.route = {}
    // const { a, b } = curr[scheduled-stops]
    const newA = {
      id: 'uuid',
      number: '',
      name:  '', // get a name ???
      timeScheduled: '',
      timeEstimated: '',
    }

    const route = {}
    acc.push(route);
    return acc;
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