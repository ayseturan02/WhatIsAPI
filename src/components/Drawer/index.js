import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles'
import {menuBar} from './../../assets/Icons/index'

const Drawer = () => {
  return (
   <TouchableOpacity >
     <View style={styles.drawer_position}>
     <Image source={menuBar} style={styles.drawer_size} />
    </View>
   </TouchableOpacity>
  )
}
export default Drawer

