import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  postCard_size: {
    height: windowWidth * 0.45,
    width: windowWidth * 0.4,
    borderRadius: windowWidth * 0.08,
    position: 'absolute',
  },
  text_position: {
    alignItems: 'center',
    width: windowWidth * 0.4,
    height: windowWidth * 0.5,
    top: windowWidth * 0.35,
  },
  text_style: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
  },
  view_position: {
    marginHorizontal: windowWidth * 0.02,
    top: windowWidth * 0.04,
  },
});
