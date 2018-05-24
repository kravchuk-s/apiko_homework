import React from 'react';
import { WebView, View } from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import HeaderImage from '../../components/HeaderImage/HeaderImage';

class AboutUs extends React.Component {

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
        <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}        
      />      
    );
  }
}



export default AboutUs;


