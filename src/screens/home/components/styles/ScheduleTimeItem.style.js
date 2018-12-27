import { StyleSheet } from 'react-native'
import { Fonts } from '../../../../constants'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingLeft: 15,
    flexDirection: 'row',
    elevation: 2,
    // backgroundColor: 'pink',
    paddingVertical: 10,
    marginBottom: 5,
    // borderRightWidth: 1,
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginHorizontal: 5
  },
  iconContainer: {
    flex: 0.1
  },
  numberAndNameContainer: {
    flex: 0.55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  timeContainer: {
    flex: 0.35,
    flexDirection: 'row',
    alignItems: 'center'
  },
  delayedTime: {
    color: 'grey',
    textDecorationLine: 'line-through',
    fontSize: 16,
    marginRight: 3
  },
  textNumber: {
    ...Fonts.standardStyle.h5,
    marginRight: 5
  },
  divider: {
    height: '100%',
    borderRightWidth: 1,
    borderRightColor: 'rgba(106, 111, 120, 0.5)'
  },
  routeName: {
    paddingLeft: 10,
    fontFamily: 'archivo',
    fontWeight: '400'
  },
  delayTimeWrapper: {
    flex: 0.45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 5
  },
  onTime: {
    fontSize: 16,
    fontWeight: '600'
  },
  onTimeWrapper: {
    flex: 0.45,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10
  }
})
