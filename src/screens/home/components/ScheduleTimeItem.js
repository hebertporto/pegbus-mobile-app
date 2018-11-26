import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles/ScheduleTimeItem.style'

const ScheduleTimeItem = ({ item }) => {
  const { number, name } = item
  return (
    <View style={styles.root}>
      <Text>
        {number} | {name}
      </Text>
      <Text>
        Scheduled: {item.timeScheduled} | Estimated: {item.timeEstimated}
      </Text>
    </View>
  )
}

export { ScheduleTimeItem }
