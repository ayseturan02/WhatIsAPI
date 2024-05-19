import {StyleSheet, Text, View, Image,Dimensions} from 'react-native';
import React from 'react';

import {Not, PlaceApi} from './../../service';
import { useState ,useEffect} from 'react';

const windowHeight = Dimensions.get('window').height;
const country = 'tr';
const tag = 'general';
const urlSent = `?country=${country}&tag=${tag}`;
const payload = {
  title: 'Blog Title',
  body: 'lorem ipsum',
  userId: 1,
};

const Search = () => {
  const [news, setNews] = useState([]);

  const fetchData = () => {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>ksdkmsmksmk</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
