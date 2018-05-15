import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 144,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 34,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
  },
  borderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#f1f1f1',
  },
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f1f1f1',
  },
});

export default styles;
