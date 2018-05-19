import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',    
    flexDirection: 'column',    
    justifyContent: 'space-between',        
  },
  firstChild:{
    flex: 2,
    alignItems: 'center',
  },
  secondChild: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center',  
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
});

export default styles;
