import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles/scheduleItem.style'

const bus = {
  id: 1,
  number: 11,
  name: 'to Glenway',
  timeScheduled: '10:14:52',
  timeEstimated: '10:14:52',
}

const checkOnTime = (estimated, scheduled) => {
  return 'due'
}

export default (ScheduleItem = () => {
  const { number, name, timeEstimated, timeScheduled } = bus
  return (
    <View style={styles.root}>
      <View style={styles.number}>
        <Text>{number}</Text>
      </View>
      <View style={styles.description}>
        <Text>{name}</Text>
      </View>
      <View style={styles.hour}>
        <Text>{checkOnTime(timeEstimated, timeScheduled)}</Text>
      </View>
    </View>
  )
})
