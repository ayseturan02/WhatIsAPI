import React from 'react';
import {HomePage, Product, Products} from '../screens';
import {RouterNames} from '../config';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../screens/Detail';

export default RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouterNames.HOMEPAGE}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouterNames.HOMEPAGE} component={HomePage} />
      <Stack.Screen name={RouterNames.DETAIL} component={Detail} />
      <Stack.Screen name={RouterNames.TREND} component={Trend} />
    </Stack.Navigator>
  );
};


