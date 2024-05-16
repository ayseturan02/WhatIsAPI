import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {a, s, image, foto, at} from './../../assets/Images/index';
import {leftArrow, save1, d, share} from './../../assets/Icons/index';
import styles from './styles';
import {Back, Option1,Description} from '../../components';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Detail = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{height: windowHeight * 1}}>
        <View style={{height: windowHeight * 1.3}}>
          <View>
            <Image
              source={foto}
              style={{
                position: 'absolute',
                height: windowHeight * 1.3,
                width: windowWidth * 1,
              }}
            />
            <View style={{padding: windowWidth * 0.044}}>
              <Back />
            </View>
            <View
              style={styles.text_position}>
              <View
                style={styles.option}>
                <Option1 text={'Trendy'} />
                <Option1 text={'Crypto'} />
              </View>
              <Description />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
