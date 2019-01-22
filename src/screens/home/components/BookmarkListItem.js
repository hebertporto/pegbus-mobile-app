import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Map } from './../../../ui/Map'

const BookmarkListItem = ({ item }) => {
  const { number, geographic } = item
  const { longitude, latitude } = geographic
  console.log('item', item)
  return (
    <View style={styles.root}>
      <View style={styles.mapWrapper}>
        <Map longitude={longitude} latitude={latitude} />
      </View>
      <View style={styles.infoTextWrapper}>
        <Text>Bus</Text>
        <Text>{number}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Text>Button</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    margin: 5
  },
  mapWrapper: {
    flex: 0.4
  },
  infoTextWrapper: {
    flex: 0.55
  },
  buttonWrapper: {
    flex: 0.15
  }
})
export { BookmarkListItem }
