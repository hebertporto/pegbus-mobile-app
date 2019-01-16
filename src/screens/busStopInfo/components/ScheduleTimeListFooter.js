import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles/ScheduleTimeListFooter.style'

const ScheduleTimeListFooter = () => {
  return (
    <View style={styles.root}>
      <View style={styles.item}>
        <Ionicons name="md-bus" size={18} color="#eab53a" />
        <Text style={styles.timeText}>Early</Text>
      </View>
      <View style={{ ...styles.item, marginRight: 20 }}>
        <Ionicons name="md-bus" size={18} color="green" />
        <Text style={styles.timeText}>On Time</Text>
      </View>
      <View style={styles.item}>
        <Ionicons name="md-bus" size={18} color="red" />
        <Text style={styles.timeText}>Late</Text>
      </View>
    </View>
  )
}

export { ScheduleTimeListFooter }
