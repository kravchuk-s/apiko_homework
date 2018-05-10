import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Sign In Screen</Text>
      <TouchableHighlight onPress={() => this.props.navigation.navigate('DrawerSignedIn')} underlayColor="white">
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                  </View>
                </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('RestorePassword')} underlayColor="white">
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Restore Password</Text>
                  </View>
                </TouchableHighlight>
      </View>
    );
  }
}

export default SignUp;


