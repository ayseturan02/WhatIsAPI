import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import styles from './styles';
const {at} = require('./../../assets/Images/index');
const {save1, share} = require('./../../assets/Icons/index');
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Description = props => {
  const {name, date, description} = props;
  return (
    <View>
      <View>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={at}
              style={{
                height: windowWidth * 0.12,
                width: windowWidth * 0.12,
                borderRadius: windowWidth * 1,
              }}
            />
          </View>
          <View
            style={{
              padding: windowWidth * 0.01,
              left: windowWidth * 0.02,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '800',
                fontSize: windowWidth * 0.04,
              }}>
              EconomicTimes
            </Text>
            <Text
              style={{
                color: '#C6C6C6',
                fontSize: windowWidth * 0.03,
                fontWeight: '600',
              }}>
              {date}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View>
            <Image
              source={save1}
              style={{
                height: windowWidth * 0.05,
                width: windowWidth * 0.05,
              }}
            />
          </View>
          <View style={{left: windowWidth * 0.02}}>
            <Image
              source={share}
              style={{
                height: windowWidth * 0.05,
                width: windowWidth * 0.05,
              }}
            />
          </View>
        </View>
      </View>

      <View style={{top: windowWidth * 0.02}}>
        <View
          style={{
            height: windowWidth * 0.008,
            backgroundColor: '#C6C6C6',
            width: windowWidth * 0.9,
          }}></View>
      </View>
      <View style={{top: windowWidth * 0.04}}>
        <Text
          style={{
            color: 'white',
            fontSize: windowWidth * 0.04,
            fontWeight: '500',
          }}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default Description;
