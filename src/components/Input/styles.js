import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  input_view: {
    backgroundColor: '#F3F1F1',
    height: windowWidth * 0.15,
    width: windowWidth * 0.75,
    borderRadius: windowWidth * 0.05,
  },
});
