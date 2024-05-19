import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import React, {useState} from 'react';
const windowHeight = Dimensions.get('window').height;
import {Card} from './../../components/index';

import {Not, PlaceApi} from './../../service';
const country = 'tr';
const tag = 'general';
const urlSent = `?country=${country}&tag=${tag}`;
const payload = {
  title: 'Blog Title',
  body: 'lorem ipsum',
  userId: 1,
};
const [news, setNews] = useState([]);

const data = () => {
  PlaceApi.getNewsApi(urlSent)
    .then(data => {
      console.log('data', data);
      setNews(data.result);
      console.log('news', news);
    })
    .catch(error => {
      console.error('Hata:', error);
    });

  Not.PlaceApi(payload)
    .then(data => {
      console.log('Veri alındı:', data);
    })
    .catch(error => {
      console.error('Hata:', error);
    });
};

const FlatListCard = () => {
  return (
    <FlatList
      horizontal={false}
      data={news}
      keyExtractor={item => item.id}
      renderItem={item => {
        console.log('item', item);
        return (
          <View>
            <Card photo={item.item.image} />
          </View>
        );
      }}
    />
  );
};

export default FlatListCard;

const styles = StyleSheet.create({});
