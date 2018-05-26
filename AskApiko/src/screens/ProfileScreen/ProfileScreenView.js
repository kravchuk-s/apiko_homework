import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import globalStyles from '../../styles/styles';


class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      header: null         
    }    
  };

  render() {
    return (
      <View>
        <View style = { globalStyles.containerHeaderBar }>
          <View style = { globalStyles.statusHeaderBar }/>                         
          <View style = { globalStyles.headerHeaderBar }>
              <DrawerMenuButton 
                onPress={ () => this.props.navigation.toggleDrawer() }
              /> 
              <HeaderImage/>                  
              <View style={{width: 30}}/>{/* placeholder */}
          </View>
          <Text style={globalStyles.signText}>Profile</Text>                          
        </View>
      </View>
    );
  }
}

export default ProfileScreen;


