import React from 'react';
import { WebView } from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';

class AboutUs extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: 'About us',
      headerLeft: (
        <DrawerMenuButton onPress={ () => navigation.toggleDrawer() }/>           
        )        
    }    
  };

  render() {
    return (      
        <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}        
      />      
    );
  }
}



export default AboutUs;


