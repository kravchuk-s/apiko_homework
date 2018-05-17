import React from 'react';
import { WebView } from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';

class TermsAndConditions extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Terms & Conditions',
      headerLeft: (
        <DrawerMenuButton onPress={ () => navigation.toggleDrawer() }/>           
        )     
    }    
  };

  render() {
    return (      
        <WebView
        source={{uri: 'https://google.com/'}}        
      />      
    );
  }
}

export default TermsAndConditions;


