import axios from 'axios';
import { get } from 'lodash';

export const getStopBusesTime = async ({ stopNumber }) => {
  try {
    const date = new Date().toISOString();
    const { data } = await axios.get(`stops/${stopNumber}/schedule.json?start=${date}`);
    return data;
  } catch (e) {
    throw new Error('Stop Request Failed')
  }
}

// linhas que passam em um determinado ponto
// https://api.winnipegtransit.com/v3/routes.json?stop=10628&api-key=NyQGsU66kIXieXPwhzrD