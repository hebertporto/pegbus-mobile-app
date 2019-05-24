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
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    flex: 1,
    backgroundColor: 'yellow'
  },
  handlerContainer: {
    paddingTop: 10,
    paddingBottom: 10
  },
  handler: {
    backgroundColor: '#DDDDDD',
    alignSelf: 'center',
    borderRadius: 20,
    width: 40,
    height: 5
  }
})
