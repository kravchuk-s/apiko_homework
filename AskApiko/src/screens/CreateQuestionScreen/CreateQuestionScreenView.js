import React from 'react';
import { View, Text } from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import styles from './styles';

class CreateQuestion extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Create Question',
      headerLeft: (
        <DrawerMenuButton onPress={ () => navigation.toggleDrawer() }/>           
        ),     
    }    
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Create Question Screen</Text>
      </View>
    );
  }
}

export default CreateQuestion;


