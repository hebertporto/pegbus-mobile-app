import React from 'react'
import { View, FlatList } from 'react-native'
import { BookmarkListItem } from './BookmarkListItem'

const keyExtractor = item => item.number.toString()

const BookmarkList = ({ data }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={BookmarkListItem}
        />
      </View>
    </View>
  )
}

export { BookmarkList }
