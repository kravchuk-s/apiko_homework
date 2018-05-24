import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import HeaderImage from '../../components/HeaderImage/HeaderImage';

class HomeScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => {
    return{      
      headerLeft: (
          <DrawerMenuButton 
            onPress={ () => navigation.toggleDrawer() }
          />           
        ),
      headerTitle: (        
          <HeaderImage/>       
      ),
      headerRight: <View />,           
    }    
  };

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


