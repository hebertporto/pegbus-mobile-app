import { StyleSheet } from 'react-native'
import { Fonts } from '../../constants'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column'
  },
  inputContainer: {
    flex: 0.6,
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  iconContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputTextContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10
  },
  button: {
    borderRadius: 10,
    width: 50,
    height: 35
  },
  buttonFilter: {
    borderRadius: 10,
    width: 50,
    height: 35
  },
  buttonText: {
    ...Fonts.standardStyle.caption,
    color: 'white'
  }
})
