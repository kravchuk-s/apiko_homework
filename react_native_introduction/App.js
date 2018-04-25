import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);    
    this.onPressCountButton = this.onPressCountButton.bind(this);
    this.onPressNullButton = this.onPressNullButton.bind(this);
    this.state = {counter: 0}
  }

  onPressCountButton(e) {
    const count = this.state.counter + 1;    
    this.setState({counter: count});    
  }

  onPressNullButton(e) {     
    this.setState({counter: 0});    
  }

  render() {    
    return (
      <View style={styles.container}>
        <Text>Count - {this.state.counter}</Text>
        <TouchableHighlight onPress={this.onPressCountButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Tap to count</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressNullButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Tap to null counter</Text>
          </View>
        </TouchableHighlight>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'    
  },
  button: {
    marginTop: 20,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
