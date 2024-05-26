import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  view: {
    height: windowWidth * 0.1,
    width: windowWidth * 0.18,
  },

  text: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: windowWidth * 0.07,
    marginTop: windowHeight * 0.01,
    fontSize: windowWidth * 0.035,
    fontWeight: '600',
  },
  text_position: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: windowWidth * 0.05,
  },
  active_tab: {
    borderRadius: windowWidth * 0.02,
    backgroundColor: 'white',
  },
  active: {
    backgroundColor: '#090130',
    borderRadius: windowWidth * 0.02,
  },
  active_text: {
    color: 'white',
  },
});
