import axios from 'axios'
import moment from 'moment'

export const getStopBusesTime = async ({ stopNumber }) => {
  try {
    const date = new Date().toISOString()
    console.log('# # # # # # #', moment(date).format('h:mm:ss a'))
    // console.log(`stops/${stopNumber}/schedule.json?start=${date}`)
    // const date = '2018-12-02T23:35:03.047Z'
    const { data } = await axios.get(
      `stops/${stopNumber}/schedule.json?start=${date}`
    )
    return { response: data, dateRequested: date }
  } catch (e) {
    throw new Error('getStopBusesTime Failed')
  }
}

export const getRoutes = async ({ stopNumber }) => {
  try {
    const { data } = await axios.get(`routes.json?stop=${stopNumber}`)
    return data
  } catch (e) {
    throw new Error('stopBusRoutes Failed')
  }
}
