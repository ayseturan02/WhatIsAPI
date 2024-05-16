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
import {Header, SelectableText1, Bottom, Title} from './../../components/index';
import {foto} from './../../assets/Images/index';
import {hut, save2, profile, search1, flame} from './../../assets/Icons/index';
import {RouterNames} from '../../config';

const HomePage = props => {
  const {navigation} = props;
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
        <View style={styles.bottom_position}>
          <Bottom icon={hut} />
          <Bottom icon={flame} />
          <Bottom icon={search1} />
          <Bottom icon={save2} />
          <Bottom icon={profile} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
