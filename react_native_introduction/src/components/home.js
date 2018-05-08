import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import * as Actions from '../actions';

class Home extends Component {
  render() {
    const { increment, nullify, count } = this.props;
    return (
                <View style={styles.container}>
                <Text>Count - {count}</Text>        
                  <TouchableHighlight onPress={(e) => increment()} underlayColor="white">
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Tap to count</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={(e) => nullify()} underlayColor="white">
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Tap to nullify counter</Text>
                  </View>
                </TouchableHighlight>
              </View>
    );
  }
};

function mapStateToProps(state) {
  return {
    count: state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
