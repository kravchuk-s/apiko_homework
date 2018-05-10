import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Question')} underlayColor="white">
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Question</Text>
                  </View>
                </TouchableHighlight>
      </View>
    );
  }
}

export default HomeScreen;


