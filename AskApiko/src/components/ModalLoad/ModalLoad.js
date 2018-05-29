import React from 'react';
import {
    View,
    Modal,
    ActivityIndicator
} from 'react-native';
import T from 'prop-types';
import styles from './styles';
import colors from '../../styles/colors';

const ModalLoad = ({
    visability,
}) => (
    <Modal
        style={styles.modalStyle}
        animationType="slide"
        transparent={true}
        visible={visability}
        onRequestClose={() => {
        alert('Modal has been closed.');
        }}>
        <View style={styles.modalWrapper}>
        <ActivityIndicator 
        style={styles.container}         
        size="large" 
        color={colors.white} 
        />
        </View>
    </Modal>
)

ModalLoad.propTypes = {
    visability: T.bool,
  };

export default ModalLoad;