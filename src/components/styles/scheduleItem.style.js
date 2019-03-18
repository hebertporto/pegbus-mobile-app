import { StyleSheet } from 'react-native'

export default (styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    maxHeight: 80,
  },
  number: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  description: {
    flex: 0.6,
    justifyContent: 'center',
  },
  hour: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 0.8,
  },
  buttonContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 15,
  },
  button: {
    borderRadius: 10,
    width: 70,
    height: 50,
  },
}))
