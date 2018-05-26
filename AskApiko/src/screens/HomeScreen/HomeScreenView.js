import React from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import globalStyles from '../../styles/styles';
import styles from './styles';
import data from '../../data/data';
import ListItem from '../../components/ListItem/ListItem';

class HomeScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => {
    return{      
      header: null           
    }    
  };

  render() {
    const {userId, id, title, body} = data[0];
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
          <Text style={globalStyles.signText}>User questions</Text>                          
        </View>

        <FlatList
          data={data}
          renderItem={({ item, i }) => (             
            <TouchableHighlight 
            onPress={() => this.props.navigation.navigate('Question')} 
            underlayColor="white">
                <ListItem 
                key={i} 
                postToShow={item}
                />
            </TouchableHighlight>       
          )}
          keyExtractor={item => item.email}         
        />        
      </View>
    );
  }
}

export default HomeScreen;


