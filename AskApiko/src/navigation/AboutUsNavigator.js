import { createStackNavigator } from 'react-navigation';
import AboutUs from '../screens/AboutUsScreen/AboutUsScreenView';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
const AboutUsNavigator = createStackNavigator({
    
    AboutUs: {
        screen: AboutUs,
        navigationOptions: ({navigation}) => ({
            drawerIcon: (
                <Ionicons
                color='#000000'
                size={28}
                name="md-document"
                />
              )
        
        }),          
    }
});

export default AboutUsNavigator;