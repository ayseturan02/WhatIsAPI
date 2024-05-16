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
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
