import { StyleSheet } from 'react-native';
import colors from './colors';
const styles = StyleSheet.create({
  colors: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signText: {
    display: 'flex',
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.black,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  signButton: {
    backgroundColor: colors.blue,
    height: 50,
    width: 260,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',         
  },
  linkText: {
    padding: 20,
    color: colors.blue,
  },
  buttonText: {
    padding: 20,
    color: colors.white,
    justifyContent: 'center',
  }, 
  textInput: {
    height: 40, 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,     
  },
  textInputContainer: {
    height: 50, 
    alignSelf: 'stretch',    
    justifyContent: 'center', 
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.mainOrange,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: colors.white,
  }
});

export default styles;
