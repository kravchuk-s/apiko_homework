import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sendButton: {
    color: colors.mainOrange, 
    marginRight: 20, 
    fontWeight: 'bold'
  },
  scrollView: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputField: {
    margin: 10
  },
  inputFieldBold: {
    margin: 10,
    fontWeight: 'bold'
  },
  bottomContainer: {
    backgroundColor: colors.white,              
    alignItems: 'flex-end',
    height: 40,
    // borderTopColor: colors.grey,
    // borderTopWidth: 1
  },
  bottomText: {
    marginRight: 20, 
    marginTop: 10, 
    marginBottom: 10
  }

});

export default styles;
