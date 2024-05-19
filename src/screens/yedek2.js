import React from 'react';
import {HomePage, Detail, Trend, Profile, Recorded, Search} from '../screens';
import {RouterNames} from '../config';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, Dimensions} from 'react-native'; // Import necessary components
import {hut, flame, profile, search1, save2} from './../assets/Icons/index';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default RootStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={RouterNames.HOMEPAGE}
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name={RouterNames.HOMEPAGE}
        component={HomePage}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={hut}
                resizeMode="contain"
                style={{
                  width: windowWidth * 0.06,
                  height: windowWidth * 0.06,
                  tintColor: focused ? '#2004A6' : '##090130',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouterNames.TREND}
        component={Trend}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={flame}
                resizeMode="contain"
                style={{
                  width: windowWidth * 0.06,
                  height: windowWidth * 0.06,
                  tintColor: focused ? '#2004A6' : '##090130',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={RouterNames.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={search1}
                resizeMode="contain"
                style={{
                  width: windowWidth * 0.06,
                  height: windowWidth * 0.06,
                  tintColor: focused ? '#2004A6' : '##090130',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouterNames.RECORDED}
        component={Recorded}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={save2}
                resizeMode="contain"
                style={{
                  width: windowWidth * 0.06,
                  height: windowWidth * 0.06,
                  tintColor: focused ? '#2004A6' : '##090130',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouterNames.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={profile}
                resizeMode="contain"
                style={{
                  width: windowWidth * 0.06,
                  height: windowWidth * 0.06,
                  tintColor: focused ? '#2004A6' : '##090130',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};



import {StyleSheet, Text, View, Image, Dimensions, Button} from 'react-native';
import React, {useState} from 'react';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {at, a, da, foto, s} from '../../assets/Images';

const Trend = () => {
  const [count, setCount] = useState(1);

  const DATA = [
    {
      id: '1',
      title: 'Pizza',
      price: '30.40',
      image: at,
    },
    {
      id: '2',
      title: 'Hamburger',
      price: '30.40',
      image: a,
    },
    {
      id: '3',
      title: 'Döner',
      price: '30.40',
      image: s,
    },
    {
      id: '4',
      title: 'İskender',
      price: '30.40',
      image: da,
    },
    {
      id: '5',
      title: 'Lahmacun',
      price: '30.40',
      image: foto,
    },
  ];
  const [image, setImage] = useState(DATA[1].image);
  console.log('DATA[count]', DATA[count].image);
  return (
    <View >
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          height: windowWidth * 0.6,
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'red',
              height: windowWidth * 0.45,
              width: windowWidth * 0.45,
            }}>
            <Image
              source={DATA[(count - 1) % DATA.length].image}
              style={{width: windowWidth * 0.45, height: windowWidth * 0.45}}
            />
          </View>
          <View
            style={{
              backgroundColor: 'red',
              height: windowWidth * 0.45,
              width: windowWidth * 0.45,
            }}>
            <Image
              source={DATA[(count + 1) % DATA.length].image}
              style={{width: windowWidth * 0.45, height: windowWidth * 0.45}}
            />
          </View>
        </View>
        <View style={{position: 'absolute'}}>
          <View
            style={{
              backgroundColor: 'black',
              height: windowWidth * 0.6,
              width: windowWidth * 0.6,
            }}>
            <Image
              source={DATA[count].image}
              style={{width: windowWidth * 0.6, height: windowWidth * 0.6}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Trend;

const styles = StyleSheet.create({});