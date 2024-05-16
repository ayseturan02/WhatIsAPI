import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    height: windowWidth * 0.09,
    width: windowWidth * 0.24,
    borderRadius: windowWidth * 0.02,
  },
  text_position: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowWidth * 0.09,
    width: windowWidth * 0.24,
  },
  text_style: {
    fontSize: windowWidth * 0.04,
    fontWeight: '400',
    color: 'black',
  },
  view_position: {marginHorizontal: 2},
});
