import { StyleSheet, Text, View,Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  icon_size:{height: windowWidth * 0.06, width: windowWidth * 0.06}
});