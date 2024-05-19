import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {leftArrow} from './../../assets/Icons/index';
import {RouterNames} from '../../config';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Back = props => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.view}>
          <View style={{padding: windowWidth * 0.015}}>
            <Image source={leftArrow} style={styles.icon_size} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Back;
