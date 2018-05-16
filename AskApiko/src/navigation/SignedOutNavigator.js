import { createDrawerNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import HomeScreen from '../screens/HomeScreen/HomeScreenView';
import AboutUs from './AboutUsNavigator';
import TermsAndConditions from '../screens/TermsAndConditionsScreen/TermsAndConditionScreenView';
import SignUp from '../screens/SignUpScreen/SignUpScreenView';
import SignUpNavigator from './SignUpNavigator';
import SignedOutDrawer from './Drawers/SignedOutDrawer';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';


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
          )
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
    contentComponent: SignedOutDrawer
});

  export default SignedOutNavigator;