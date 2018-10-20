import { StyleSheet }  from 'react-native';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    maxHeight: 80
  },
  inputContainer: {
    flex: 0.8,
  },
  buttonContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    margin: 15,
  },
  button: {
    borderRadius: 10,
    width: 50,
    height: 50
  }
});