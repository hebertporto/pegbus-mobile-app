import { AsyncStorage } from 'react-native'

const INDICE = 'temp'

const extractInfo = busInfo => {
  const { key, direction, name, centre } = busInfo
  return {
    number: key,
    name,
    direction,
    geographic: centre.geographic
  }
}

export const getTempItem = async () => {
  const item = await AsyncStorage.getItem(INDICE)
  AsyncStorage.removeItem(INDICE)
  return item ? JSON.parse(item) : {}
}

export const saveTempStop = async stopInfo => {
  try {
    const info = extractInfo(stopInfo)
    await AsyncStorage.setItem(INDICE, JSON.stringify(info))
  } catch (e) {
    console.log('error save saveTemp', e)
  }
}
