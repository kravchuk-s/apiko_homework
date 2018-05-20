import React from 'react';
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import colors from '../../styles/colors';

class BackButton extends React.Component {
    render(){
        return(            
            <Ionicons
                style={{paddingLeft: 16}}            
                color={colors.mainOrange}
                size={28}
                name="md-arrow-round-back"
            />            
        );
    }
}

export default BackButton;

