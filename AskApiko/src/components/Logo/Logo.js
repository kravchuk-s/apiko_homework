import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import logo from './logo.png';

const Logo = ({
  borderBottom,
  borderTop,
}) => (
  <View style={[
    styles.container,
    borderBottom && styles.borderBottom,
    borderTop && styles.borderTop,
  ]}
  >
    <Image
      source={logo}
      style={styles.image}
    />
  </View>
);

export default Logo;
