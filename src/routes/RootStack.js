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
    <Stack.Navigator
      initialRouteName={RouterNames.HOMEPAGE}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouterNames.HOMEPAGE} component={HomePage} />
      <Stack.Screen name={RouterNames.DETAIL} component={Detail} />
      <Stack.Screen name={RouterNames.TREND} component={Trend} />
      <Stack.Screen name={RouterNames.PROFILE} component={Profile} />
      <Stack.Screen name={RouterNames.RECORDED} component={Recorded} />
      <Stack.Screen name={RouterNames.SEARCH} component={Search} />
    </Stack.Navigator>
  );
};
