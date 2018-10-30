import React from "react";
import { View } from "react-native";

import styles from './styles/scheduleItem.style';

export default ScheduleItem = () => {
  return (
    <View style={styles.root}>
      <View style={styles.number}></View>
      <View style={styles.description}></View>
      <View style={styles.hour}></View>
    </View>
  )
}