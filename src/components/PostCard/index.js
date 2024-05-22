import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {RouterNames} from './../../config';
import {useNavigation} from '@react-navigation/native';

const PostCard = props => {
  const navigation = useNavigation();
  const {image, date, description, name} = props;
  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate(RouterNames.DETAIL, {
          image: image,
          date: date,
          name: name,
          description: description,
        });
      }}>
      <View style={styles.view_position}>
        <Image source={{uri: image}} style={styles.postCard_size} />
        <View style={styles.text_position}>
          <Text style={styles.text_style}>{name}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default PostCard;
