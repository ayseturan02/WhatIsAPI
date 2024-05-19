import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const PostCard = props => {
  const {photo, text} = props;
  return (
    <View style={styles.view_position}>
      <Image source={{uri: photo}} style={styles.postCard_size} />
      <View style={styles.text_position}>
        <Text style={styles.text_style}>{text}</Text>
      </View>
    </View>
  );
};

export default PostCard;
