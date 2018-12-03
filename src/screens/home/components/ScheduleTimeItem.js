import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles/ScheduleTimeItem.style'

const parseHour = hour => parseInt(hour.split(':').join(''), 10)

const showTime = (scheduled, estimated) => {
  // if (parseHour(scheduled) < parseHour(estimated)) {
  //   return (
  //     <View style={styles.timeContainer}>
  //       <Text>Time: </Text>
  //       <Text style={styles.delayedTime}>{scheduled}</Text>
  //       <Text style={styles.onTime}>{estimated}</Text>
  //     </View>
  //   )
  // }
  // return (
  //   <View style={styles.timeContainer}>
  //     <Text>Time: </Text>
  //     <Text>{estimated}</Text>
  //   </View>
  // )
  return (
    <View style={styles.timeContainer}>
      <Text>Time: </Text>
      <Text style={styles.delayedTime}>{scheduled}</Text>
      <Text style={styles.onTime}>{estimated}</Text>
    </View>
  )
}

const ScheduleTimeItem = ({ item }) => {
  const { number, name, timeEstimated, timeScheduled } = item
  return (
    <View style={styles.root}>
      <View style={styles.numberAndName}>
        <Text style={styles.textNumber}>{number} </Text>
        <Text style={styles.routeName}>| {name}</Text>
      </View>
      {showTime(timeScheduled, timeEstimated)}
    </View>
  )
}

export { ScheduleTimeItem }
