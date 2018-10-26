import { scheduleStop, routesOnStop } from './data'
import { mapperScheduler, mapperBusRouterPerStop } from '../busApiMapper'

describe('Route Mapper', () => {
  const data = mapperBusRouterPerStop(routesOnStop);

  test('extract info from api response', () => {
    expect(data[0]).toEqual(1);
  });
});

describe('Schedule Route Mapper', () => {
  const data = mapperScheduler(scheduleStop);

  test('extract info from api response', () => {
    expect(data[0]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: 'END'
        })
      ])
    )
  });
});