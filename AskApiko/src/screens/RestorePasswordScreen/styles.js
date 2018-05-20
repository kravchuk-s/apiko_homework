import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionText: {
    fontSize: 16,
    color: colors.grey,
    margin: 20,
    marginBottom: 0,
  },
  firstChild:{
    
    alignItems: 'center',
  },
  secondChild: {
    
    justifyContent: 'space-between', 
    alignItems: 'center',  
  },
  contentContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',    
  }
});

export default styles;
