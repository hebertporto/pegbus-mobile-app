import { StyleSheet } from 'react-native'
import { Fonts } from '../../constants'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 0.8,
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputTextContainer: {
    borderBottomWidth: 0
  },
  button: {
    borderRadius: 10,
    width: 70,
    height: 35
  },
  buttonText: {
    ...Fonts.standardStyle.caption,
    color: 'white'
  }
})
