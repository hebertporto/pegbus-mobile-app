import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 5,
    elevation: 2,
    marginHorizontal: 5
  },
  titleWrapper: {
    paddingVertical: 5,
    paddingLeft: 15
  },
  listWrapper: {
    flex: 1
  },
  text: {
    color: Colors.TEXT_DEFAULT,
    fontWeight: '700'
  }
})
