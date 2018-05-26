import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    StatusBar
} from 'react-native';
import SearchHeader from 'react-native-search-header';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../styles/colors';
import globalStyles from '../../styles/styles';

class SearchScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      header: null
    }    
  };

  render () {
      return (
          <View style = { globalStyles.containerHeaderBar }>
              <View style = { globalStyles.statusHeaderBar }/>                         
              <View style = { globalStyles.headerHeaderBar }>
                  <DrawerMenuButton 
                    onPress={ () => this.props.navigation.toggleDrawer() }
                  /> 
                  <HeaderImage/>                  
                  <TouchableHighlight
                      style={{marginRight: 20}}                      
                      onPress = {() => this.searchHeader.show()}
                      underlayColor="transparent"
                  >
                    <Ionicons
                      color= {colors.mainOrange}
                      size={28}
                      name="md-search"
                    />
                  </TouchableHighlight>
              </View>
              <SearchHeader
                  ref = {(searchHeader) => {
                      this.searchHeader = searchHeader;
                  }}
              />              
          </View>
      );
  }
}

export default SearchScreen;


