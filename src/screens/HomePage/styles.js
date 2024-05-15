import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  selectable: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: windowHeight * 0.07,
  },
});
