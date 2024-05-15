import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  drawer_size: {
    height: windowWidth * 0.09,
    width: windowWidth * 0.09,
  },
  drawer_position: {
    top: -windowWidth * 0.03,
  },
});
