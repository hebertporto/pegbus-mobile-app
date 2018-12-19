import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment'

import { styles } from './styles/ScheduleTimeItem.style'

const ScheduleTimeItem = ({ item }) => {
  const { number, name, timeEstimated, timeScheduled } = item
  if (moment(timeScheduled).isBefore(moment(timeEstimated))) {
    return (
      <View style={styles.root}>

        <View style={styles.iconContainer}>
          <Ionicons name="md-bus" size={26} color="red" />
        </View>

        <View style={styles.numberAndNameContainer}>
          <Text style={styles.textNumber}>{number} </Text>
          <Text style={styles.routeName}>| {name}</Text>
        </View>

        <View style={styles.timeContainer}>
          <Text>Late: </Text>
          <Text style={styles.delayedTime}>
            {moment(timeScheduled).format('h:mm')}
          </Text>
          <Text style={styles.onTime}>
            {moment(timeEstimated).format('h:mm')}
          </Text>
        </View>

      </View>
    )
  }
  if (moment(timeScheduled).isAfter(moment(timeEstimated))) {
    return (
      <View style={styles.root}>
        <View style={styles.iconContainer}>
          <Ionicons name="md-bus" size={26} color="#eab53a" />
        </View>

        <View style={styles.numberAndNameContainer}>
          <Text style={styles.textNumber}>{number} </Text>
          <Text style={styles.routeName}>| {name}</Text>
        </View>

        <View style={styles.timeContainer}>
          <Text>Early: </Text>
          <Text style={styles.delayedTime}>
            {moment(timeScheduled).format('h:mm')}
          </Text>
          <Text style={styles.onTime}>
            {moment(timeEstimated).format('h:mm')}
          </Text>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.root}>
      <View style={styles.iconContainer}>
        <Ionicons name="md-bus" size={26} color="green" />
      </View>

      <View style={styles.numberAndNameContainer}>
        <Text style={styles.textNumber}>{number} </Text>
        <Text style={styles.routeName}>| {name}</Text>
      </View>

      <View style={styles.timeContainer}>
        <Text>Due: </Text>
        <Text style={styles.delayedTime}>
          {moment(timeScheduled).format('h:mm')}
        </Text>
        <Text style={styles.onTime}>
          {moment(timeEstimated).format('h:mm')}
        </Text>
      </View>
    </View>
  )
}

export { ScheduleTimeItem }
