import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../constants'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 5,
    marginTop: 5,
    elevation: 2,
    // borderWidth: 1,
    borderTopRightRadius: 1,
    borderTopLeftRadius: 1,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
    marginHorizontal: 5
  },
  rowInput: {
    flex: 0.7,
    flexDirection: 'row'
  },
  rowInfo: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15
  },
  inputWrapper: {
    flex: 0.6,
    justifyContent: 'center'
  },
  buttonSearchWrapper: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  filterButtonWrapper: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelInputText: {
    ...Fonts.standardStyle.caption,
    fontWeight: '600',
    paddingLeft: 15
  },
  inputText: {
    borderColor: Colors.BLACK_SECONDARY_ALT,
    borderBottomWidth: 1,
    width: '90%',
    paddingLeft: 5,
    marginLeft: 15,
    ...Fonts.standardStyle.p
  },
  buttonSearch: {
    borderRadius: 5,
    width: 50,
    height: 35
  },
  buttonFilter: {
    borderRadius: 5,
    width: 50,
    height: 35
  },
  labelTime: {
    paddingLeft: 5,
    ...Fonts.standardStyle.caption
  }
})
