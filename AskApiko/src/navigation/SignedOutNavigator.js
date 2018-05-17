import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import AboutUs from './AboutUsNavigator';
import TermsAndConditions from './TermsAndConditionsNavigator';
import SignUpNavigator from './SignUpNavigator';
import CustomDrawerContentComponent from './Drawers/CustomDrawerContentComponent';
import { Ionicons } from '@expo/vector-icons';

const SignedOutNavigator = createDrawerNavigator({
    Home: {
      screen: HomeNavigator,
      navigationOptions: ({ navigation }) => ({
        drawerIcon: (
            <Ionicons
            color={navigation.isFocused() ? '#ffffff':'#000000'}
            size={28}
            name="md-home"
            />
          ),        
      }),
    },
    AboutUs: {
        screen: AboutUs,
        navigationOptions: ({ navigation }) => ({
            drawerIcon: (
                <Ionicons
                color={navigation.isFocused() ? '#ffffff':'#000000'}
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
                color={navigation.isFocused() ? '#ffffff':'#000000'}
                size={28}
                name="md-document"
                />
              )
          }),
    },
    SignUp: {
        screen: SignUpNavigator,
        navigationOptions: ({ navigation }) => ({
            drawerIcon: (
                <Ionicons
                color={navigation.isFocused() ? '#ffffff':'#000000'}
                size={28}
                name="md-log-in"
                />
              )
          }),
    }
  },{
    contentComponent: CustomDrawerContentComponent
});

  export default SignedOutNavigator;