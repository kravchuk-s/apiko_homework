import React from 'react';
import { WebView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class TermsAndConditions extends React.Component {
  static navigationOptions = {
    title: 'Terms & Conditions',    
  }
  render() {
    return (      
        <WebView
        source={{uri: 'https://google.com/'}}        
      />      
    );
  }
}

export default TermsAndConditions;


