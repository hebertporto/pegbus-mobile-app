import { StyleSheet } from 'react-native'

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
  map: {
    flex: 0.3
  },
  info: {
    flex: 0.7,
    flexDirection: 'column'
  },
  busNumber: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  itemFilter: {
    padding: 10,
    minWidth: 50,
    // borderRightColor: 'blue',
    // borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSelected: {
    backgroundColor: 'green',
    color: 'white',
    padding: 5,
    borderRadius: 20
  }
})
