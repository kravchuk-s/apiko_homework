import React from 'react';
import { View, Text } from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import styles from './styles';

class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      headerLeft: (
        <DrawerMenuButton onPress={ () => navigation.toggleDrawer() }/>           
        ),
      headerTitle: (        
        <HeaderImage/>       
      ),
      headerRight: <View />,          
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


