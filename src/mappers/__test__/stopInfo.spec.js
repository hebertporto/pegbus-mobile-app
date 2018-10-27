import {
  scheduleStop,
  routesOnStop
} from './data'
import {
  mapperScheduler,
  mapperBusRouterPerStop
} from '../busApiMapper'

describe('Route Mapper', () => {
  const data = mapperBusRouterPerStop(routesOnStop);

  test('extract info from api response', () => {
    expect(data[0]).toEqual(1);
  });
});

describe('Schedule Route Mapper', () => {
  const data = mapperScheduler(scheduleStop);

  test('mapper stop info', () => {
    expect(data.stopInfo).toEqual(
      expect.objectContaining({
        key: 10628,
        name: 'Northbound Main at McDermot',
        number: 10628,
        direction: 'Northbound',
        side: 'Nearside',
        street: {
          key: 2265,
          name: 'Main Street',
          type: 'Street'
        },
        'cross-street': {
          key: 2400,
          name: 'McDermot Avenue',
          type: 'Avenue'
        },
        centre: {
          utm: {
            zone: '14U',
            x: 633682,
            y: 5528839
          },
          geographic: {
            latitude: '49.89699',
            longitude: '-97.1386'
          }
        }
      })
    )
  });

  test('mapper routes', () => {
    expect(data.shedules).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          number: 11,
          name: 'Portage-Kildonan to Glenway',
          timeScheduled: '2018-10-22T10:14:52',
          timeEstimated: '2018-10-22T10:14:52'
        })
      ])
    )
  });
});