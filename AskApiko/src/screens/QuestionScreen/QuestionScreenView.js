import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class QuestionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      title: 'QuestionPage',      
    }    
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Question Screen</Text>
      </View>
    );
  }
}

export default QuestionScreen;

