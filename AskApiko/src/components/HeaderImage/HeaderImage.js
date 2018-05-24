import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const HeaderImage = () => (
        <Image
            resizeMode='cover'  
            style={styles.container}
            source={require('../../assets/logo.png')}
        />
);

export default HeaderImage;