import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    height: windowWidth * 0.6,
    justifyContent: 'center',
  },

  right_view:{
    backgroundColor: 'red',
    height: windowWidth * 0.45,
    width: windowWidth * 0.45,
    borderRadius: windowWidth * 0.05,
  },
  right_photo:{
    width: windowWidth * 0.45,
    height: windowWidth * 0.45,
    borderRadius: windowWidth * 0.05,
  },
  left_view:{
    backgroundColor: 'red',
    height: windowWidth * 0.45,
    width: windowWidth * 0.45,
    borderRadius: windowWidth * 0.05,
  },

  left_photo:{
    width: windowWidth * 0.45,
    height: windowWidth * 0.45,
    borderRadius: windowWidth * 0.05,
  },
  center_view:{
    backgroundColor: 'black',
    height: windowWidth * 0.6,
    width: windowWidth * 0.75,
    borderRadius: windowWidth * 0.05,
  },
  center_photo:{
    width: windowWidth * 0.75,
    height: windowWidth * 0.6,
    borderRadius: windowWidth * 0.05,
    position: 'absolute',
  },
  text_position:{
    alignItems: 'center',
    alignSelf: 'center',
    height: windowWidth * 0.53,
    justifyContent: 'flex-end',
    width: windowWidth * 0.4,
  },





});
