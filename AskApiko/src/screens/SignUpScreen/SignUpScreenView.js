import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Sign Up</Text>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('SignIn')} underlayColor="white">
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                  </View>
                </TouchableHighlight>
      </View>
    );
  }
}

export default SignUp;


