import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import BackButton from '../../components/BackButton/BackButton';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import colors from '../../styles/colors';

class QuestionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      headerBackImage: (<BackButton/>),
      headerTitle: (        
        <HeaderImage/>       
      ),
      headerRight: <View />,       
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


