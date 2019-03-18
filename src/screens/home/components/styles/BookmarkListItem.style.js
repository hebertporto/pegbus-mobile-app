import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    margin: 5,
  },
  mapWrapper: {
    flex: 0.4,
  },
  infoTextWrapper: {
    flex: 0.55,
    paddingLeft: 5,
  },
  buttonWrapper: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  textNumber: {
    color: Colors.TEXT_DEFAULT,
    fontWeight: '700',
    fontSize: 16,
  },
  textName: {
    color: Colors.TEXT_DEFAULT,
    letterSpacing: 1,
  },
  buttonText: {
    color: Colors.TITLE_BLACK,
    fontWeight: '800',
    fontSize: 28,
  },
})
