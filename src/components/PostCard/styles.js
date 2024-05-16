import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  postCard_size: {
    height: windowWidth * 0.5,
    width: windowWidth * 0.4,
    borderRadius: windowWidth * 0.08,
    position: 'absolute',
  },
  text_position: {
    alignItems: 'center',
    width: windowWidth * 0.4,
    height: windowWidth * 0.47,
    justifyContent: 'flex-end',
  },
  text_style: {
    color: 'white',
    fontSize: windowWidth * 0.05,
    fontWeight: '500',
  },
});
