import { getStopBusesTime, getRoutes } from './api'
import {
  mapperScheduler,
  mapperBusRouterPerStop
} from '../mappers/busApiMapper'

export const stopBusAndSchedule = async ({ stopNumber }) => {
  try {
    const response = await getStopBusesTime({ stopNumber })
    const busInfoAndSchedule = await mapperScheduler(response)
    return busInfoAndSchedule
  } catch (e) {
    throw Error('stopBusAndSchedule Failed', e)
  }
}

export const stopBusRoutes = async ({ stopNumber }) => {
  try {
    const response = await getRoutes({ stopNumber })
    const routes = await mapperBusRouterPerStop(response)
    return routes
  } catch (e) {
    throw Error('stopBusRoutes Failed', e)
  }
}
