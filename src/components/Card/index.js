import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {RouterNames} from './../../config';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';

const Card = props => {
  const navigation = useNavigation(); // Correct way to use useNavigation
  const {image, date, description, name} = props;
  return (
    <View style={{paddingTop: windowWidth * 0.04, alignItems: 'center'}}>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate(RouterNames.DETAIL, {
            image: image,
            date: date,
            name: name,
            description: description,
          });
        }}>
        <View style={styles.view_card}>
          <View style={{flexDirection: 'row', padding: windowWidth * 0.03}}>
            <View>
              <Image source={{uri: image}} style={styles.photo_size} />
            </View>
            <View style={styles.text_position}>
              <View style={{width: windowWidth * 0.5}}>
                <Text style={styles.text_style}>{name}</Text>
              </View>
              <View style={styles.read_position}>
                <View>
                  <Text style={styles.read_style}>{date}</Text>
                </View>
                <View>
                  <Text style={styles.read_style}>Today</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Card;
