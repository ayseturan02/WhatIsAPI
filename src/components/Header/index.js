import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {menuBar, search2} from './../../assets/Icons/index';
import {Input,Drawer} from "./../../components/index";

const Header = () => {
  return (
    <View style={styles.header_position}>
      <Input placeholder={'Search County'} icon={search2} />
      <Drawer />
    </View>
  );
};

export default Header;
