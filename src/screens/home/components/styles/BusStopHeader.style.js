import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5
  },
  map: {
    flex: 0.3,
  },
  info: {
    flex: 0.7,
    flexDirection: 'column',
  },
  busNumber: {
    flex: 1,
    backgroundColor: 'grey',
  }
});