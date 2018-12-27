import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import moment from 'moment'

import { styles } from './styles/ScheduleTimeItem.style'

const checkTime = ({ timeScheduled, timeEstimated }) => {
  if (moment(timeScheduled).isBefore(moment(timeEstimated))) {
    return {
      iconColor: 'red',
      isOnTime: false
    }
  }
  if (moment(timeScheduled).isAfter(moment(timeEstimated))) {
    return {
      iconColor: '#eab53a',
      isOnTime: false
    }
  }
  return {
    iconColor: 'green',
    isOnTime: true
  }
}

const ScheduleTimeItem = ({ item }) => {
  const { number, name, timeEstimated, timeScheduled } = item
  const time = checkTime({ timeEstimated, timeScheduled })
  return (
    <View style={{ ...styles.root }}>
      <View style={styles.iconContainer}>
        <Ionicons name="md-bus" size={26} color={time.iconColor} />
      </View>

      <View style={styles.numberAndNameContainer}>
        <Text style={styles.textNumber}>{number} </Text>
        <View style={styles.divider} />
        <Text style={styles.routeName}>{name}</Text>
      </View>

      <View style={styles.timeContainer}>
        {!time.isOnTime ? (
          <View style={styles.delayTimeWrapper}>
            <Text style={styles.delayedTime}>
              {moment(timeScheduled).format('h:mm')}
            </Text>
          </View>
        ) : null}

        {!time.isOnTime ? (
          <View style={{ flex: 0.1 }}>
            <MaterialCommunityIcons
              name="arrow-right"
              size={12}
              color="black"
            />
          </View>
        ) : null}

        <View
          style={
            !time.isOnTime ? styles.onTimeWrapper : styles.onTimeWrapperSingle
          }
        >
          <Text style={styles.onTime}>
            {moment(timeEstimated).format('h:mm')}
          </Text>
        </View>
      </View>
    </View>
  )
}

export { ScheduleTimeItem }
