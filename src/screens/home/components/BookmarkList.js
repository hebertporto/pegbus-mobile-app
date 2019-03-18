import React from 'react'
import PropTypes from 'prop-types'
import { Surface } from 'react-native-paper'
import { View, FlatList, Text } from 'react-native'
import { BookmarkListItem } from './BookmarkListItem'

import { styles } from './styles/BookmarkList.style'

const keyExtractor = item => item.number.toString()

const BookmarkList = ({ data, navigate }) => {
  const renderItem = ({ item }) => (
    <BookmarkListItem item={item} navigate={navigate} />
  )
  return (
    <Surface style={styles.root}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Saved Bus Stop</Text>
      </View>
      <View style={styles.listWrapper}>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </Surface>
  )
}

BookmarkList.propTypes = {
  data: PropTypes.array.isRequired,
  navigate: PropTypes.func.isRequired,
}

export { BookmarkList }
