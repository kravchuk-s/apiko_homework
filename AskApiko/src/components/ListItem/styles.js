import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    bigblue: {
        color: '#424242',
        fontWeight: 'bold',
        fontSize: 16
    },
    red: {
        color: 'red',
    },
    flexy: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    flexyWhite: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: colors.white
    },
    flexDirection: {
        flexDirection: 'row'
    },
    textColor: {
        color: colors.grey
    }
});

export default styles;