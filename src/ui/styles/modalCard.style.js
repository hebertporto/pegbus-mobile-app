import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#000000'
  },
  modalContainer: {
    position: 'relative',
    borderRadius: 10,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#fff',
    flex: 1,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, .60)',
        shadowOpacity: 1.0,
        shadowRadius: 7,
        shadowOffset: {
          width: 0,
          height: 4
        }
      },
      android: {
        elevation: 7
      }
    }),
    borderWidth: 0.5,
    borderColor: '#EEE'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  modalTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#354868'
  },
  btn: {
    marginRight: 5
  },
  btnText: {
    color: '#32cdff',
    fontWeight: 'bold',
    fontSize: 18
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 35
  },
  card: {
    marginLeft: 25,
    marginRight: 25,
    height: 200
  },
  cardSpacing: {
    marginTop: 50
  },
  button: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeholder: {
    fontSize: 18,
    color: '#bbb',
    textAlign: 'center'
  },
  text: {
    fontSize: 18,
    color: '#354868',
    textAlign: 'center'
  },
  cancelButton: {
    marginTop: 2
  },
  cancelIcon: {
    color: '#32cdff',
    fontWeight: 'bold'
  }
})
