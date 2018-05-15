import React from 'react';
import { Touchable, WebView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class AboutUs extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: 'About us',
      //TODO
      // header: (
      // <Touchable onPress={() => navigation.toggleDrawer()} />                    
      // ),
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


