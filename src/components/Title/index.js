import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Title = (props) => {
    const {title1,title2} =props;
  return (
    <View style={styles.title_position}>
      <View>
        <Text style={styles.title1_style}>{title1}</Text>
      </View>
      <View>
        <Text style={styles.title2_style}>{title2}</Text>
      </View>
    </View>
  );
};

export default Title;
