import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {Header, SelectableText1, Card, Title} from './../../components/index';
import {da} from './../../assets/Images/index';
import {search2, menuBar} from './../../assets/Icons/index';

const HomePage = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', height: windowHeight}}>
      <View>
        <Header />
        <ScrollView style={{height: windowHeight * 0.82}}>
          <View style={{height: windowHeight * 1.2}}>
            <Title
              title1={'Good Morning'}
              title2={'Explore the world ny one Click'}
            />
            <View style={{height: windowHeight * 0.07}}>
              <ScrollView horizontal={true} style={{height: windowHeight * 0}}>
                <View style={{width: windowWidth * 1.5}}>
                  <View style={styles.selectable}>
                    <SelectableText1 />
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;