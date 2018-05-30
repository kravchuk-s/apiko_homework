import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexOne: {
    flex: 1
  },
  profileWrapper: {    
    backgroundColor: colors.lightGrey, 
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20      
  },
  imageStyle: {
    width: 75, 
    height: 75
  },
  usernameText: {    
    fontSize: 24, 
    fontWeight: '500', 
    marginLeft: 20
  },
  userEmail: {
    fontSize: 18, 
    fontWeight: '400', 
    marginLeft: 20
  },
  postedTextWrapper: {
    backgroundColor: colors.white, 
    height: 35, 
    justifyContent: 'center',
  },
  postedText: {
    fontSize: 16, 
    fontWeight: '500', 
    marginLeft: 20
  }
});

export default styles;
