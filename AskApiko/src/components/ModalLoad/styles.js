import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalWrapper: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: colors.grey, 
    opacity: 0.3
  },
  modalStyle: {
    backgroundColor: colors.grey, 
    opacity: 0.3
  }
   
});

export default styles;
