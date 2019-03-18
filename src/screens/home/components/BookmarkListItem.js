import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Map } from './../../../components/Map'
import { Divider } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { SquareIndicator } from '../../../components/SquareIndicator'
import { styles } from './styles/BookmarkListItem.style'

const BookmarkListItem = ({ item, navigate }) => {
  const { number, geographic, direction, name } = item
  const { longitude, latitude } = geographic
  return (
    <TouchableOpacity onPress={() => navigate(number)}>
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
          <Ionicons name={'md-search'} size={22} />
        </View>
        <Divider />
      </View>
    </TouchableOpacity>
  )
}

export { BookmarkListItem }
