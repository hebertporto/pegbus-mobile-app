import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles/ScheduleTimeItem.style'

const ScheduleTimeItem = ({ item }) => {
  const { id } = item
  return (
    <View styles={styles.root}>
      <Text>{id} Item</Text>
    </View>
  )
}

export { ScheduleTimeItem }

{
  /* <View key={item.id}>
  <Text>
    {item.number} | {item.name}
  </Text>
  <Text style={{ marginLeft: 10 }}>x
    Scheduled: {item.timeScheduled} | Estimated:{' '}
    {item.timeEstimated}
  </Text>
  <Text>---------</Text>
</View> */
}
