import React from 'react';
import { WebView } from 'react-native';

class AboutUs extends React.Component {
  render() {
    return (      
        <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}        
      />      
    );
  }
}

export default AboutUs;


