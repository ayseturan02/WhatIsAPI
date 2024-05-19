import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default styles = StyleSheet.create({
  image_size: {
    position: 'absolute',
    width: windowWidth * 1,
    height: windowHeight * 1,
  },
  text_position: {
    width: windowWidth * 0.9,
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  option: {
    flexDirection: 'row',
    height: windowHeight * 0.5,
    alignItems: 'flex-end',
  },
  opak: {
    height: windowHeight * 1.3,
    backgroundColor: 'black',
    opacity: 0.7,
  },
});
