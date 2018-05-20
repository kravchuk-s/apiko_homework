import React from 'react';
import { View, Text } from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import styles from './styles';

class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Profile',
      headerLeft: (
        <DrawerMenuButton onPress={ () => navigation.toggleDrawer() }/>           
        ),        
    }    
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

export default ProfileScreen;


