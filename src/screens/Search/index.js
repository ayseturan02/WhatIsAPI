import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {a, da, image, s} from './../../assets/Images/index';

const Search = () => {
  return (
    <View>
      <Image source={a} style={{position: 'absolute'}} />
      <Image source={image} />
      
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
