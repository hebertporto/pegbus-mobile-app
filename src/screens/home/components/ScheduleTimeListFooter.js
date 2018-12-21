import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ScheduleTimeListFooter = () => {
  return (
    <View style={styles.root}>
      <View style={{ flex: 0.4 }}>
        <Text style={styles.caption}>Legend</Text>
      </View>
      <View style={{ flex: 0.6, flexDirection: 'row', paddingTop: 10 }}>
        <View style={styles.item}>
          <Ionicons name="md-bus" size={18} color="#eab53a" />
          <Text style={styles.timeText}>Early</Text>
        </View>
        <View style={styles.item}>
          <Ionicons name="md-bus" size={18} color="green" />
          <Text style={styles.timeText}>On Time</Text>
        </View>
        <View style={styles.item}>
          <Ionicons name="md-bus" size={18} color="red" />
          <Text style={styles.timeText}>Late</Text>
        </View>
      </View>
    </View>
  )
}

export { ScheduleTimeListFooter }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 5,
    paddingLeft: 10
  },
  item: {
    flex: 0.33,
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  caption: {
    color: 'grey',
    paddingTop: 5,
    paddingBottom: 10
  },
  timeText: {
    marginLeft: 5
  }
})
