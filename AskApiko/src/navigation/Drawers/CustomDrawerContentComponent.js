import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Logo from '../../components/Logo/Logo';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../styles/colors'

//TODO: add separator before SignUpDraweItem

const CustomDrawerContentComponent = (props) => {
    return (
        <ScrollView>        
          <SafeAreaView
            style={{flex: 1}}
            forceInset={{ top: 'always', horizontal: 'never' }}          >
            <Logo borderBottom />              
              <DrawerItems {...props}
              // itemStyle={{ borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.separator}}
              activeTintColor={colors.white} 
              activeBackgroundColor={colors.mainOrange} 
              inactiveTintColor={colors.black} 
              inactiveBackgroundColor='transparent'                       
              />           
          </SafeAreaView>
        </ScrollView>    
      );
    };

export default CustomDrawerContentComponent;

