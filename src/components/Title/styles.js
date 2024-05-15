import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default styles = StyleSheet.create({
  title_position: {padding: windowWidth * 0.035, left: windowWidth * 0.02},
  title1_style: {
    color: '#090130',
    fontSize: windowWidth * 0.07,
    fontWeight: '600',
  },
  title2_style: {
    color: '#090130',
    fontSize: windowWidth * 0.04,
    fontWeight: '400',
  },
});
