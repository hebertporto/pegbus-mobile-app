import { get, sortBy } from 'lodash'
import uuid from 'uuid'

const getNameRoute = name => {
  const splited = name.split(' ')
  const [a, b] = splited.reverse()
  const parsedName = `${b} ${a}`
  return parsedName
}

const mapperStopInfo = busInfo => {
  const { key, direction, name, centre } = busInfo
  return centre
    ? {
        number: key,
        name,
        direction,
        geographic: centre.geographic
      }
    : {}
}

export const mapperScheduler = apiResponse => {
  const stopInfoResponse = get(apiResponse, 'stop-schedule.stop', {})
  const stopInfo = mapperStopInfo(stopInfoResponse)
  const allShedules = get(apiResponse, 'stop-schedule.route-schedules', [])

  const shedulesUordened = allShedules.reduce((acc, curr) => {
    const routeInfo = curr.route
    const closetTimes = curr['scheduled-stops'].slice(0, 6)
    const montendRoutes = closetTimes.map(route => {
      return {
        id: uuid(),
        number: routeInfo.number,
        name: getNameRoute(route.variant.name),
        timeScheduled: get(route, 'times.arrival.scheduled', null),
        timeEstimated: get(route, 'times.arrival.estimated', null)
      }
    })

    const allRoutes = [...acc, ...montendRoutes]
    return allRoutes
  }, [])
  const shedules = sortBy(shedulesUordened, ['timeEstimated', 'number'])
  return { stopInfo, shedules }
}

export const mapperBusRouterPerStop = apiResponse => {
  const fullInfo = get(apiResponse, 'routes', [])
  const routes = fullInfo.map(route => {
    return route.number
  })
  return routes.sort()
}

export const mapperNearbyStops = apiResponse => {
  const fullStops = get(apiResponse, 'stops', [])
  const stopsUordered = fullStops.map(stop => ({
    latitude: stop.centre.geographic.latitude,
    longitude: stop.centre.geographic.longitude,
    direction: stop.direction,
    distance: stop.distances.walking,
    number: stop.number,
    name: stop.name
  }))
  return sortBy(stopsUordered, ['distance', 'number'])
}
