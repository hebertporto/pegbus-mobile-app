import { StyleSheet } from 'react-native'
import { Fonts } from './../../../../constants'
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EBEBEB',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  caption: {
    ...Fonts.standardStyle.caption
  },
  timeText: {
    ...Fonts.standardStyle.captionEmphasis,
    marginLeft: 5
  }
})
