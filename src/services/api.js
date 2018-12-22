import axios from 'axios'

export const getStopBusesTime = async ({ stopNumber }) => {
  try {
    const date = new Date().toISOString()
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
