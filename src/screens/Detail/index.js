import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {Back, Option1, Description} from '../../components';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Detail = ({route, navigation}) => {
  const {image, date, description} = route.params;
  return (
    <SafeAreaView>
      <ScrollView style={{height: windowHeight * 1}}>
        <View style={{height: windowHeight * 1.3}}>
          <View>
            <Image
              source={{uri: image}}
              style={{
                position: 'absolute',
                height: windowHeight * 1.3,
                width: windowWidth * 1,
              }}
            />
            <View
              style={styles.opak}>
              <View style={{padding: windowWidth * 0.044}}>
                <Back />
              </View>
              <View style={styles.text_position}>
                <View style={styles.option}>
                  <Option1 text={'Trendy'} />
                  <Option1 text={'Crypto'} />
                </View>
                <Description
                  {...route.params}
                  date={date}
                  description={description}
                  navigation={navigation}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
