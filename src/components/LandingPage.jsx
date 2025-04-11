import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import Transaction from './Transaction';
import AddTransaction from './AddTransaction';
import Statitics from './Statitics';
import Profile from './Profile';

const Tab = createBottomTabNavigator();
const LandingPage = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='home' component={HomePage}/>
        <Tab.Screen name='tran' component={Transaction}/>
        <Tab.Screen name='addtrans' component={AddTransaction} options={{tabBarLabelStyle:{display:'none'}}}/>
        <Tab.Screen name='stat' component={Statitics}/>
        <Tab.Screen name='profile' component={Profile}/>
    </Tab.Navigator>
  )
}

export default LandingPage