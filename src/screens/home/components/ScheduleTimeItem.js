import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment'

import { styles } from './styles/ScheduleTimeItem.style'

const checkTime = ({ timeScheduled, timeEstimated }) => {
  if (moment(timeScheduled).isBefore(moment(timeEstimated))) {
    return {
      iconColor: 'red',
      label: 'Late',
      isOnTime: false
    }
  }
  if (moment(timeScheduled).isAfter(moment(timeEstimated))) {
    return {
      iconColor: '#eab53a',
      label: 'Early',
      isOnTime: false
    }
  }
  return {
    iconColor: 'green',
    label: 'Due',
    isOnTime: true
  }
}

const ScheduleTimeItem = ({ item }) => {
  const { number, name, timeEstimated, timeScheduled } = item
  const time = checkTime({ timeEstimated, timeScheduled })
  return (
    <View style={styles.root}>
      <View style={styles.iconContainer}>
        <Ionicons name="md-bus" size={26} color={time.iconColor} />
      </View>

      <View style={styles.numberAndNameContainer}>
        <Text style={styles.textNumber}>{number} </Text>
        <Text style={styles.routeName}>| {name}</Text>
      </View>

      <View style={styles.timeContainer}>
        {!time.isOnTime ? (
          <Text style={styles.delayedTime}>
            {moment(timeScheduled).format('h:mm')}
          </Text>
        ) : null}
        <Text style={styles.onTime}>
          {moment(timeEstimated).format('h:mm')}
        </Text>
      </View>
    </View>
  )
}

export { ScheduleTimeItem }
