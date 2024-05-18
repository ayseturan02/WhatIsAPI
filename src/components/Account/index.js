import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Account = () => {
  return (
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
            Today, 08.21 AM
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
  );
};

export default Account;
