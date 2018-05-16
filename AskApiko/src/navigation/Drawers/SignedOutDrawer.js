import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Logo from '../../components/Logo/Logo';
import { Ionicons } from '@expo/vector-icons';

//TODO: add separator before SignUpDraweItem

const CustomDrawerContentComponent = (props) => {
    return (
        <ScrollView>        
          <SafeAreaView
            style={{flex: 1}}
            forceInset={{ top: 'always', horizontal: 'never' }}          >
            <Logo borderBottom />              
              <DrawerItems {...props}
              itemStyle={{ borderTopWidth: StyleSheet.hairlineWidth, borderTopColor:'#f1f1f1'}}
              activeTintColor='#ffffff' 
              activeBackgroundColor='#F8981D' 
              inactiveTintColor='#000000' 
              inactiveBackgroundColor='transparent'                       
              />           
          </SafeAreaView>
        </ScrollView>    
      );
    };

export default CustomDrawerContentComponent;

