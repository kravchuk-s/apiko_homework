import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',      
  },
  status: {
      zIndex: 10,
      width: DEVICE_WIDTH,
      height: 21,
      backgroundColor: '#ffffff'
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: DEVICE_WIDTH,
      height: 59,
      marginBottom: 6,
      backgroundColor: '#ffffff',
  },
});

export default styles;
