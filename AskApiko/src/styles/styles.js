import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

const styles = StyleSheet.create({
  colors: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginLeft: 20,
    marginBottom: 10,
  },
  signButton: {
    backgroundColor: colors.blue,
    height: 50,
    width: 260,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36,         
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
  },
  containerHeaderBar: {      
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: colors.white,      
  },
  statusHeaderBar: {
      zIndex: 10,
      width: DEVICE_WIDTH,
      height: 21,
      backgroundColor: colors.white
  },
  headerHeaderBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: DEVICE_WIDTH,
      height: 59,
      marginBottom: 6,
      backgroundColor: colors.white,
  },
  
});

export default styles;
