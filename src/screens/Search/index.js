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
import {Not, PlaceApi} from './../../service';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Search = () => {
  const [news, setNews] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = keyword => {
    const urlSent = `?country=tr&tag=general`;

    setNews([]);

    PlaceApi.getNewsCity(urlSent)
      .then(data => {
        console.log('data', data);
        setNews(data.result);
        setFilterData(data.result);
        setMasterData(data.result);
        console.log('selam');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (search) {
      news.map(item => {
        if (item.name.includes(search)) {
          setFilterData([item]);
        }
      });
    }
  }, [search]);

  const itemView = ({item}) => {
    console.log('item', item);
    return (
      <View>
        <Text>
          {item.name}
        </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return <View />;
  };

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input_view}
          placeholder="Enter search keyword"
          placeholderTextColor={'gray'}
          value={search}
          onChangeText={text => searchFilter(text)}
        />
        <View style={styles.iconContainer}>
          <Image source={{uri: 'your_icon_url'}} style={styles.icon} />
        </View>
      </View>
      <FlatList
        data={filterData}
        keyExtractor={index => index}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={itemView}
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
