import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
  textInput : {
    height: 40, 
    alignSelf: 'stretch', 
    marginLeft: 20, 
    marginRight: 20
  }
});

export default styles;
