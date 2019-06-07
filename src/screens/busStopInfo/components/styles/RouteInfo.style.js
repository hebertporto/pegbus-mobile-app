import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../../constants'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
    elevation: 2,
    marginHorizontal: 5,
  },
  mapContainer: {
    flex: 0.4,
  },
  infoContainer: {
    flex: 0.6,
  },
  stopWrapper: {
    flex: 0.6,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 10,
  },
  bottomWrapper: {
    flex: 0.4,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 25,
  },
  bleft: {
    flex: 0.5,
  },
  bright: {
    paddingRight: 10,
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textNumber: {
    color: Colors.TEXT_DEFAULT,
    fontWeight: '700',
    fontSize: 16,
  },
  stopName: {
    color: Colors.TEXT_DEFAULT,
    fontWeight: '400',
  },
  date: {
    fontSize: 12,
  },
  dateTitle: {
    fontSize: 12,
    color: Colors.TEXT_DEFAULT,
    fontWeight: '500',
  },
  labelWrapper: {
    flex: 0.1,
    paddingTop: 10,
    paddingLeft: 15,
    marginBottom: 5,
  },
  label: {
    ...Fonts.standardStyle.p,
    fontWeight: '600',
    fontSize: 12,
  },
  info: {
    flex: 0.9,
    flexDirection: 'column',
  },
  busNumber: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemFilter: {
    minWidth: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSelected: {
    backgroundColor: '#2196F3',
    color: 'white',
    fontWeight: '600',
    padding: 3,
    borderRadius: 5,
  },
  textUnselected: {
    padding: 5,
  },
  buttonFilter: {
    width: 40,
  },
})
