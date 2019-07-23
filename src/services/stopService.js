import { getStopBusesTime, getRoutes, getStops } from './api'
import {
  mapperScheduler,
  mapperBusRouterPerStop,
  mapperNearbyStops,
} from '../mappers/busApiMapper'

export const stopBusAndSchedule = async ({ stopNumber }) => {
  try {
    const { response, dateRequested } = await getStopBusesTime({ stopNumber })
    const { stopInfo, shedules } = mapperScheduler(response)
    return { stopInfo, shedules, dateRequested }
  } catch (e) {
    console.log(e)
    throw Error('stopBusAndSchedule Failed', e)
  }
}

export const stopBusRoutes = async ({ stopNumber }) => {
  try {
    const response = await getRoutes({ stopNumber })
    const routes = mapperBusRouterPerStop(response)
    return routes
  } catch (e) {
    throw Error('stopBusRoutes Failed', e)
  }
}

export const nearbyStops = async ({ latitude, longitude, distance }) => {
  try {
    const response = await getStops({ latitude, longitude, distance })
    const stops = mapperNearbyStops(response)
    return stops
  } catch (e) {
    throw Error('nearbyStops Failed', e)
  }
}
