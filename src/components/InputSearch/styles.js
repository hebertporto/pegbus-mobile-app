import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../constants'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    elevation: 2,
    paddingLeft: 15,
    justifyContent: 'center',
    margin: 5,
    marginBottom: 10,
  },
  inputWrapper: {
    flex: 0.8,
    justifyContent: 'center',
  },
  buttonSearchWrapper: {
    flex: 0.2,
    justifyContent: 'center',
  },
  labelInputText: {
    ...Fonts.standardStyle.caption,
    fontWeight: '600',
  },
  inputText: {
    borderColor: Colors.BLACK_SECONDARY_ALT,
    borderBottomWidth: 1,
    width: '95%',
    ...Fonts.standardStyle.p,
  },
  buttonSearch: {
    borderRadius: 5,
    width: 50,
    height: 35,
  },
})
