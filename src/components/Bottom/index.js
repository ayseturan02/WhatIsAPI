import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';


const Bottom = props => {
  const {navigation} = useNavigation;
  const {icon} = props;
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouterNames.TREND);
        }}>
        <Image source={icon} style={styles.icon_size} />
      </TouchableOpacity>
    </View>
  );
};

export default Bottom;
