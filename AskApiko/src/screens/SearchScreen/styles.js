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
  label: {
      flexGrow: 1,
      fontSize: 20,
      fontWeight: `600`,
      textAlign: `left`,
      marginVertical: 8,
      paddingVertical: 3,
      color: `#f5fcff`,
      backgroundColor: `transparent`
  },
  button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 130,
      height: 40,
      marginTop: 40,
      borderRadius: 2,
      backgroundColor: `#ff5722`
  }
});

export default styles;
