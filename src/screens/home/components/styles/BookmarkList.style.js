import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../../../helpers'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  titleWrapper: {
    paddingVertical: 5,
    paddingLeft: 15,
  },
  listWrapper: {
    flex: 1,
  },
  text: {
    color: Colors.TEXT_DEFAULT,
    fontWeight: '700',
  },
  title: {
    ...Fonts.standardStyle.caption,
    fontWeight: '600',
  },
})
