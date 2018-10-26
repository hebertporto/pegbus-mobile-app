import { get } from 'lodash';

export const mapperScheduler = (apiResponse) => {
  const schedules = get('stop-schedule.stop', []);
  return schedules;
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