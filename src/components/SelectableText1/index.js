import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import React, {useState} from 'react';
import styles from './styles';

const listTab = [
  {
    status: 'Covid-19',
  },
  {
    status: 'Spor',
  },
  {
    status: 'Magazin',
  },
  {
    status: 'Siyaset',
  },
  {
    status: 'Teknoloji',
  },
];

const SelectableText = () => {
  const [status, setStatus] = useState('Magazin');
  const setStatusFilter = status => {
    setStatus(status);
  };
  return (
    <View style={styles.text_position}>
      {listTab.map(e => (
        <View style={styles.view}>
          <TouchableOpacity
            style={[styles.active_tab, status === e.status && styles.active]}
            onPress={() => setStatusFilter(e.status)}>
            <Text
              style={[styles.text, status === e.status && styles.active_text]}>
              {e.status}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default SelectableText;
