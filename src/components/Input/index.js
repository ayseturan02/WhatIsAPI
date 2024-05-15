import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import styles from './styles';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import {search2} from './../../assets/Icons/index';

const Input = props => {
  const {icon, placeholder} = props;
  return (
    <View>
      <TextInput
        style={styles.input_view}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
      />
      <View
        style={{
          alignItems: 'flex-end',
          width: windowWidth * 0.7,
          top: -windowWidth * 0.1,
        }}>
        <Image
          source={icon}
          style={{height: windowWidth * 0.06, width: windowWidth * 0.06}}
        />
      </View>
    </View>
  );
};

export default Input;
