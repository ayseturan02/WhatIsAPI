import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Card,
  FlatListTrend,
  Title,
  FlatListCard,
} from './../../components/index';
import {foto, at, a, da, s} from './../../assets/Images/index';
import styles from './styles';

const Trend = () => {
  return (
    <View>
      <Title
        title1={'Walk With Trend'}
        title2={"Don't stay behind , read the trend"}
      />
      <FlatListTrend />
      <View style={styles.read_position}>
        <Text style={styles.read}>Top reads of the day</Text>
      </View>
      <ScrollView style={styles.container}>
        <View>
          <FlatListCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default Trend;
