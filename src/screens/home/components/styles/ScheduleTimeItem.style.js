import { StyleSheet } from 'react-native'
import { Metrics } from '../../../../constants'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    paddingVertical: 15,
    paddingLeft: 21,
    paddingRight: 25,
    fontFamily: 'archivo'
  },
  timeContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  delayedTime: {
    color: 'grey',
    textDecorationLine: 'line-through',
    fontSize: 12
  },
  onTime: {
    fontSize: 16
  },
  numberAndName: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textNumber: {
    fontSize: 18
  },
  routeName: {
    fontSize: 16
  }
})
