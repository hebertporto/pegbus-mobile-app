import axios from 'axios';
import { get } from 'lodash';

export const getStopBusesTime = async ({ stopNumber }) => {
  console.log('stopNumber', stopNumber);
  try {
    const date = new Date().toISOString() // Iso Date Format to pass to API
    // &route=44
    const res = await axios.get(`stops/${stopNumber}/schedule.json?start=${date}`);
    console.log('sucess', schedule);
    return schedule;
  } catch (e) {
    console.log('error no request', e);
    return [];
  }
}

// linhas que passam em um determinado ponto
// https://api.winnipegtransit.com/v3/routes.json?stop=10628&api-key=NyQGsU66kIXieXPwhzrD