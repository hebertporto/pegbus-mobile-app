import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  scrollView: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    paddingTop: 10
  },
  container: {
    flex: 1,
    // width: 100,
    // height: 100,
    backgroundColor: 'white',
    // overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // marginTop: 20,
    paddingTop: 7,
    paddingLeft: 7,
    paddingRight: 7,
    shadowColor: 'rgba(0, 0, 0, .60)',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: -2
    },
    elevation: 7
  },
  backgroundContainer: {
    flex: 1
    // backgroundColor: 'yellow'
    // position: 'absolute'
  }
})
