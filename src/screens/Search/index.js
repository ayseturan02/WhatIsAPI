import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import {Card} from './../../components/index';
import {Not, PlaceApi} from './../../service';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Search = () => {
  const [news, setNews] = useState([]);
  const [city, setCity] = useState('');

  const fetchData = city => {
    const urlSent = `?city=${city}`;

    setNews([]);

    PlaceApi.getNewsCity(urlSent)
      .then(data => {
        console.log('data', data);
        setNews(data.result);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    const payload = {
      title: 'Blog Title',
      body: 'lorem ipsum',
      userId: 1,
    };

    Not.PlaceApi(payload)
      .then(data => {
        console.log('Data received:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    if (city) {
      fetchData(city);
    }
  }, [city]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input_view}
          placeholder="Enter city name"
          placeholderTextColor={'gray'}
          value={city}
          onChangeText={setCity}
        />
        <View style={styles.iconContainer}>
          <Image source={{uri: 'your_icon_url'}} style={styles.icon} />
        </View>
      </View>
      <FlatList
        data={news}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <Card
                image={item.image}
                date={item.date}
                name={item.name}
                description={item.description}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input_view: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: windowWidth * 0.06,
    width: windowWidth * 0.06,
  },
});
