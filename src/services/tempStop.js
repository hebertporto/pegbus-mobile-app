import { AsyncStorage } from 'react-native'

const INDICE = 'temp'

export const removeTemp = async () => AsyncStorage.removeItem(INDICE)

export const getTempItem = async () => {
  try {
    const item = await AsyncStorage.getItem(INDICE)
    console.log('ITEM', item)
    return item ? JSON.parse(item) : {}
  } catch (e) {
    console.log('errpr getTempItem ', e)
  }
}

export const saveTempStop = async ({ stopInfo }) => {
  try {
    await AsyncStorage.setItem(INDICE, JSON.stringify(stopInfo))
  } catch (e) {
    console.log('error save saveTemp', e)
  }
}
