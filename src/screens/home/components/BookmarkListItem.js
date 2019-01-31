import React from 'react'
import { View, Text } from 'react-native'
import { Map } from './../../../ui/Map'
import { Divider } from 'react-native-paper'

import { styles } from './styles/BookmarkListItem.style'
import { SquareIndicator } from '../../../ui/SquareIndicator'

const BookmarkListItem = ({ item }) => {
  const { number, geographic, direction, name } = item
  const { longitude, latitude } = geographic
  return (
    <View style={styles.root}>
      <View style={styles.mapWrapper}>
        <Map longitude={longitude} latitude={latitude} />
      </View>
      <View style={styles.infoTextWrapper}>
        <Text style={styles.textNumber}>{number}</Text>
        <Text style={styles.textName}>{name}</Text>
        <SquareIndicator direction={direction} />
      </View>
      <View style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>{'>'}</Text>
      </View>
      <Divider />
    </View>
  )
}

export { BookmarkListItem }
