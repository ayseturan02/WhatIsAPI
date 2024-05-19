import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.6,
  },
  read: {
    fontSize: windowWidth * 0.06,
    color: '#090130',
    fontWeight: '600',
  },
  read_position: {
    padding: windowWidth * 0.03,
  },
});
