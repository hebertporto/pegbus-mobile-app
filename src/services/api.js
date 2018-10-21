import axios from 'axios';
import { get } from 'lodash';


export const getStopBusesTime = async ({ stopNumber }) => {
  console.log('stopNumber', stopNumber);
  try {
    const date = new Date().toISOString() // Iso Date Format to pass to API
    // &route=44
    const res = await axios.get(`stops/${stopNumber}/schedule.json?start=${date}&api-key=NyQGsU66kIXieXPwhzrD`);
    const schedule = get(res.data, 'stop-schedule.route-schedules[0].scheduled-stops', []);
    console.log('sucess', schedule);
    return schedule;
  } catch (e) {
    console.log('error no request', e);
    return [];
  }
}
