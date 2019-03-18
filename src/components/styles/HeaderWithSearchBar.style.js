import { StyleSheet } from 'react-native'
// import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
  root: {
    marginTop: 25,
    height: 55,
    flex: 1,
    alignItems: 'flex-end',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#2196F3',
    elevation: 8,
  },
  inputContainer: {
    flex: 1,
    // marginLeft: 40,
    backgroundColor: 'green',
  },
})
