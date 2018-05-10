import React from 'react';
import { WebView } from 'react-native';

class TermsAndConditions extends React.Component {
  render() {
    return (      
        <WebView
        source={{uri: 'https://google.com/'}}        
      />      
    );
  }
}

export default TermsAndConditions;


