import { StyleSheet } from 'react-native'
import { Fonts } from '../../constants/Fonts'

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
  labelInput: {
    fontSize: 10
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

// 40318   &  10628 ( McDermont )
