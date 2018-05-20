import React from 'react';
import { View, Text } from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import styles from './styles';

class SearchScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Search',
      headerLeft: (
        <DrawerMenuButton onPress={ () => navigation.toggleDrawer() }/>           
        ),        
    }    
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
      </View>
    );
  }
}

export default SearchScreen;


