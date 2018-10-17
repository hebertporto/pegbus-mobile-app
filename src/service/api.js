import axios from 'axios';
import { get } from 'lodash';


export const getSchedule44 = async () => {
  try {
    const date = new Date().toISOString() // Iso Date Format to pass to API

    const res = await axios.get(`https://api.winnipegtransit.com/v3/stops/40318/schedule.json?start=${date}&route=44&api-key=NyQGsU66kIXieXPwhzrD`);
    const schedule = get(res.data, 'stop-schedule.route-schedules[0].scheduled-stops', []);
    console.log('sucess', schedule);
    return schedule;
  } catch (e) {
    console.log('error no request');
  }
}