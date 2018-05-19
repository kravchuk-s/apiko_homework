import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  // container: {
  //   display: 'flex',    
  //   flexDirection: 'column',    
  //   justifyContent: 'space-between',        
  // },
  // contentContainer: {
  //   display: 'flex',    
  //   flexDirection: 'column',  
  //   justifyContent: 'space-between', 
  // },
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
    
  },
   
});

export default styles;
