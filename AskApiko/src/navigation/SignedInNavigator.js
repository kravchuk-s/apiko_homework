import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { TouchableHighlight, Alert, Text } from 'react-native';

import Home from './HomeNavigator';
import AboutUs from './AboutUsNavigator';
import TermsAndConditions from './TermsAndConditionsNavigator';
import Profile from './ProfileNavigator';
import CreateQuestion from './CreateQuestionNavigator';
import Search from './SearchNavigator';
import SignedOutNavigator from './SignedOutNavigator';

import CustomDrawerContentComponent from './Drawers/CustomDrawerContentComponent';
import { Ionicons } from '@expo/vector-icons';
import colors from '../styles/colors';

import { onSignOut } from '../modules/auth/auth';

const DrawerSignedIn = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
          drawerIcon: (
              <Ionicons
              color={navigation.isFocused() ? colors.white : colors.black}
              size={28}
              name="md-home"
              />
            ),        
        }),
      },
    Search: {
        screen: Search,
        navigationOptions: ({ navigation }) => ({
          drawerIcon: (
              <Ionicons
              color={navigation.isFocused() ? colors.white : colors.black}
              size={28}
              name="md-search"
              />
            ),        
        }),
    },
    CreateQuestion: {
        screen: CreateQuestion,
        navigationOptions: ({ navigation }) => ({
          drawerIcon: (
              <Ionicons
              color={navigation.isFocused() ? colors.white : colors.black}
              size={28}
              name="md-create"
              />
            ),        
        }),
    },
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            drawerIcon: (
                <Ionicons
                color={navigation.isFocused() ? colors.white : colors.black}
                size={28}
                name="md-person"
                />
              ),        
          }),
      },    
    AboutUs: {
        screen: AboutUs,
        navigationOptions: ({ navigation }) => ({
            drawerIcon: (
                <Ionicons
                color={navigation.isFocused() ? colors.white : colors.black}
                size={28}
                name="md-information-circle"
                />
              )
          }),        
        },
    TermsAndConditions: {
            screen: TermsAndConditions,
            navigationOptions: ({ navigation }) => ({
                drawerIcon: (
                    <Ionicons
                    color={navigation.isFocused() ? colors.white : colors.black}
                    size={28}
                    name="md-document"
                    />
                )
            }),
        },
    SignOut: {
            screen: SignedOutNavigator,
            navigationOptions: ({ navigation }) => ({
                drawerIcon: (
                    //TODO: тимчасовий костиль
                    <TouchableHighlight
                    onPress={ () =>_showAlert(navigation)}>                
                        <Ionicons
                        color={navigation.isFocused() ? colors.white : colors.black}
                        size={28}
                        name="md-log-out"
                        />
                    </TouchableHighlight>                   
                ),                
            }),
        }    
    },{
        contentComponent: CustomDrawerContentComponent,
        initialRouteName: "Home"
    });

    _showAlert = (navigation) => {
        Alert.alert(
          'Sign Out',
          'Ary you sure you want to sign out?',
          [            
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => onSignOut().then(() => navigation.navigate("SignedOutNavigator"))},
          ],
          { cancelable: false }
        )
      }
    
    

  export default DrawerSignedIn;