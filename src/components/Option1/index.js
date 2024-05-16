import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Option1 = props => {
  const {text} = props;
  return (
    <View style={styles.view_position}>
      <View style={styles.view}>
        <View style={styles.text_position}>
          <Text style={styles.text_style}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Option1;
