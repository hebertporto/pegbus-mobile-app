import { get, sortBy } from 'lodash'
import moment from 'moment'
import uuid from 'uuid'

const checkTime = (atualDate, closetTimes) => {
  const a = closetTimes.map(item => {
    return moment(atualDate).isSameOrBefore(
      moment(item.times.arrival.scheduled, 'hour')
    )
  })
  console.log('a', a)
  console.log('----')
}

const getHourFromDateIso = date => date //moment(date).format('h:mm')

const getNameRoute = name => {
  const splited = name.split(' ')
  const [a, b] = splited.reverse()
  const parsedName = `${b} ${a}`
  return parsedName
}

export const mapperScheduler = apiResponse => {
  const atualDate = new Date()
  const stopInfo = get(apiResponse, 'stop-schedule.stop', {})
  const allShedules = get(apiResponse, 'stop-schedule.route-schedules', [])

  const shedulesUordened = allShedules.reduce((acc, curr) => {
    const routeInfo = curr.route
    const closetTimes = curr['scheduled-stops'].slice(0, 4)
    checkTime(atualDate, closetTimes)
    const montendRoutes = closetTimes.map(route => {
      return {
        id: uuid(),
        number: routeInfo.number,
        name: getNameRoute(route.variant.name),
        timeScheduled: getHourFromDateIso(route.times.arrival.scheduled),
        timeEstimated: getHourFromDateIso(route.times.arrival.estimated)
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
