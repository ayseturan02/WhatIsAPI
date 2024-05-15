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
import {Header, SelectableText1, Card} from './../../components/index';
import {da} from './../../assets/Images/index';
import {search2, menuBar} from './../../assets/Icons/index';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const HomePage = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', height: windowHeight}}>
      <Header />
      <ScrollView style={{height: windowHeight * 0.82}}>
        <View style={{height: windowHeight * 1.2}}>
          <ScrollView horizontal={true} style={{height: windowHeight * 0}}>
            <View style={{width: windowWidth * 1.5}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  height: windowHeight * 0.07,
                }}>
                <SelectableText1 />
              </View>
            </View>
          </ScrollView>

          <View style={{alignContent: 'center', alignSelf: 'center'}}>
            <Card photo={da} />
            <Card photo={da} />
            <Card photo={da} />
            <Card photo={da} />
            <Card photo={da} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

<View style={styles.selectable}>
<SelectableText1 />
</View>
export default HomePage;
