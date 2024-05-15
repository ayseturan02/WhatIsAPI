import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React from 'react'
import styles from './styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = (props) => {
  const {photo} =props;
  return (
    <View
    style={styles.view_card}>
    <View style={{flexDirection: 'row', padding: windowWidth * 0.03}}>
      <View>
        <Image
          source={photo}
          style={styles.photo_size}
        />
      </View>
      <View
        style={styles.text_position}>
        <View style={{width: windowWidth * 0.5}}>
          <Text
            style={styles.text_style}>
            How income tax rule applies on your cryptocurrency gains -
            Explained
          </Text>
        </View>
        <View
          style={styles.read_position}>
          <View>
            <Text style={styles.read_style}>
              15 mins read
            </Text>
          </View>
          <View>
            <Text style={styles.read_style}>
              Today
            </Text>
          </View>
        </View>
      </View>
    </View>
  </View>
  )
}

export default Card

