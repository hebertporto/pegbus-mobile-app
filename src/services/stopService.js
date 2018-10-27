import { getStopBusesTime } from './api'
import { mapperScheduler } from '../mappers/busApiMapper';

export const stopBusAndSchedule = async ({ stopNumber }) => {
  try {
    const response = await getStopBusesTime({ stopNumber });
    const busInfoAndSchedule = await mapperScheduler(response);
    return busInfoAndSchedule;
  } catch (e) {
    throw Error('Mapper Failed', e)
  }
}