import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import DrawerMenuButton from '../../../components/DrawerMenuButton/DrawerMenuButton';
import HeaderImage from '../../../components/HeaderImage/HeaderImage';
import globalStyles from '../../../styles/styles';

const Header = ({
    onPress
}) => (
    <View style = { globalStyles.containerHeaderBar }>
        <View style = { globalStyles.statusHeaderBar }/>                         
        <View style = { globalStyles.headerHeaderBar }>
            <DrawerMenuButton 
                onPress={ onPress }
            /> 
            <HeaderImage/>                  
            <View style={{width: 30}}/>{/* placeholder */}
        </View>
        <Text style={globalStyles.signText}>Profile</Text>                          
    </View>
);

Header.propTypes = {
    onPress: T.func,
  };


export default Header;

