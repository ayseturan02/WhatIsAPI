import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const PostCard = (props) => {
    const {photo,text} =props;
  return (
    <View>
      <View>
        <Image
          source={photo}
          style={styles.postCard_size}
        />
      </View>
      <View
        style={styles.text_position}>
        <Text
          style={styles.text_style}>
          {text}
        </Text>
      </View>
    </View>
  );
};

export default PostCard;
