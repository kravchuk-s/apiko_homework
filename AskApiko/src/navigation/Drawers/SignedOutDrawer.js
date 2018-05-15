import React from 'react';
import { View, ScrollView } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Logo from '../../components/Logo/Logo';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawerContentComponent = (props) => {
    return (
        <ScrollView>        
          <SafeAreaView
            style={{flex: 1}}
            forceInset={{ top: 'always', horizontal: 'never' }}          >
            <Logo borderBottom />            
              <DrawerItems {...props} style={{color: '#000000'}} 
              activeTintColor='#ffffff' 
              activeBackgroundColor='#F8981D' 
              inactiveTintColor='#000000' 
              inactiveBackgroundColor='transparent'
              iconContainerStyle = {<View style={{backgroundColor: '#000000'}}><Ionicons name="ios-menu" /></View>}              
              />
           
          </SafeAreaView>
        </ScrollView>    
      );
    };

export default CustomDrawerContentComponent;