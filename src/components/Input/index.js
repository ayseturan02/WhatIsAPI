import {StyleSheet, Image, View, TextInput, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card} from './../../components/index';
import {Not, PlaceApi} from './../../service';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const country = 'tr';
const tag = 'general';
const urlSent = `?country=${country}&tag=${tag}`;
const payload = {
  title: 'Blog Title',
  body: 'lorem ipsum',
  userId: 1,
};

const Input = props => {
  const {icon, placeholder} = props;
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
      <TextInput
        style={styles.input_view}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        onChangeText={text => searchUser(text)}
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
