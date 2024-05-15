import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  header_position: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.9,
    alignSelf: 'center',
    top: windowWidth * 0.03,
    alignItems: 'center',
  },
});
