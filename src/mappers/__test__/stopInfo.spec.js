import { scheduleStop } from './data'
import { mapperScheduler } from '../busApiMapper'

describe('Stop Info Mapper', () => {
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