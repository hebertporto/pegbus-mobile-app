import React from "react";
import { View, Text } from "react-native";

import styles from './styles/scheduleItem.style';

export default ScheduleItem = () => {
  return (
    <View style={styles.root}>
      <View style={styles.number}>
        <Text>A</Text>
      </View>
      <View style={styles.description}>
        <Text>B</Text>
      </View>
      <View style={styles.hour}>
        <Text>C</Text>
      </View>
    </View>
  )
}