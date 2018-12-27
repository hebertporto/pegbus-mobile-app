import { StyleSheet } from 'react-native'
import { Fonts } from '../../../../constants'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 5,
    marginTop: 5,
    elevation: 2,
    borderTopRightRadius: 1,
    borderTopLeftRadius: 1,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
    marginHorizontal: 5
  },
  labelWrapper: {
    flex: 0.1,
    paddingTop: 10,
    paddingLeft: 15,
    marginBottom: 5
  },
  label: {
    ...Fonts.standardStyle.p,
    fontWeight: '600',
    fontSize: 12
  },
  info: {
    flex: 0.9,
    flexDirection: 'column'
  },
  busNumber: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  itemFilter: {
    minWidth: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSelected: {
    backgroundColor: '#2196F3',
    color: 'white',
    fontWeight: '600',
    padding: 3,
    borderRadius: 5
  },
  textUnselected: {
    padding: 5
  }
})
