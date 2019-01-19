import { AsyncStorage } from 'react-native'

const INDICE = 'bookmarks'

const getAll = async () => {
  const list = await AsyncStorage.getItem(INDICE)
  return list ? JSON.parse(list) : []
}

export const saveBookmarkList = async bookmarkList =>
  AsyncStorage.setItem(INDICE, JSON.stringify(bookmarkList))

export const saveBookmark = async stopInfo => {
  try {
    const bookmarkList = await getAll()
    bookmarkList.push(stopInfo)
    await saveBookmarkList(bookmarkList)
  } catch (e) {
    console.log('error save stop bus', e)
  }
}

export const getBookmarkStored = async stopNumber => {
  const bookmarks = await getAll()
  const isBookmarkStored = bookmarks.reduce((acc, curr) => {
    if (parseInt(curr.number, 10) === stopNumber) {
      return true
    }
    return acc
  }, false)
  return isBookmarkStored
}

export const getBookmark = () => {}

export const deleteBookmark = async stopNumber => {
  try {
    const bookmarks = await getAll()
    const newBookmarks = bookmarks.filter(b => b.number !== stopNumber)
    await saveBookmarkList(newBookmarks)
  } catch (e) {
    console.log('error remove bookmark')
  }
}

export const getBookmarkList = async () => getAll()

export const clearAllBookmarks = async () => AsyncStorage.removeItem(INDICE)
