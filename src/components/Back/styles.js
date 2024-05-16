import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
    view:{
        backgroundColor: 'white',
        height: windowWidth * 0.08,
        width: windowWidth * 0.08,
        borderRadius: windowWidth * 0.02,
      },
      icon_size:{
        height: windowWidth * 0.045,
        width: windowWidth * 0.045,
      },

})