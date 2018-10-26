import { scheduleStop, routesOnStop } from './data'
import { mapperScheduler, mapperBusRouterPerStop } from '../busApiMapper'

describe('Mappers', () => {
  const data = mapperBusRouterPerStop(routesOnStop);

  // test('extract info from api response', () => {
  //   expect(data[0]).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({
  //         type: 'END'
  //       })
  //     ])
  //   )
  // });

  test('extract info from api response', () => {
    expect(data[0]).toEqual(1);
  });

});