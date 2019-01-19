import React from 'react'
import { View, Text } from 'react-native'

const BookmarkListItem = ({ item }) => {
  const { number } = item
  console.log(item)
  return (
    <View style={{ flex: 1, height: 80, backgroundColor: 'yellow' }}>
      <Text>Bus</Text>
      <Text>{number}</Text>
    </View>
  )
}

export { BookmarkListItem }
