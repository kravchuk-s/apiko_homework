import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import colors from '../../styles/colors'

const DrawerMenuButton = ({
  onPress,
}) => (
    <TouchableHighlight 
    style={{marginLeft: 16}} 
    onPress={onPress}
    underlayColor="transparent"    
    > 
        <Ionicons
        color={colors.mainOrange}
        size={28}
        name="md-menu"
        />
    </TouchableHighlight>
);

DrawerMenuButton.propTypes = {
    onPress: T.func,
  };

export default DrawerMenuButton;
