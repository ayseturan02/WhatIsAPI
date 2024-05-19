import {View, Dimensions, SafeAreaView, ScrollView} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {
  Header,
  SelectableText1,
  Bottom,
  Title,
  HeaderPhoto,
  Card,
  FlatListCard,
} from './../../components/index';
import {hut, save2, profile, search1, flame} from './../../assets/Icons/index';
import React from 'react';
import styles from './styles';
import {Routes} from '../../Configs';
import {Not, PlaceApi} from '../../service';

const HomePage = props => {
  const {item} = props;
  const {navigation} = props;
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', height: windowHeight}}>
      <View>
        <Header />
        <Title
          title1={'Good Morning'}
          title2={'Explore the world ny one Click'}
        />
        <HeaderPhoto />
        <View style={{height: windowHeight * 0.07}}>
          <ScrollView horizontal={true} style={{height: windowHeight * 0}}>
            <View style={{width: windowWidth * 1.5}}>
              <View style={styles.selectable}>
                <SelectableText1 />
              </View>
            </View>
          </ScrollView>
        </View>
        <FlatListCard />
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
