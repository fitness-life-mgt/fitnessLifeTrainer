import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../config/colors';

// import Home from './HomeScreen';
import Page02 from './page02';
import Page03 from './page03';
import Page04 from './page04';

const HomeStack = createStackNavigator();
const page02 = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    barStyle={{backgroundColor: 'tomato'}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Page02"
      component={Page02StackScreen}
      options={{
        tabBarLabel: 'Page_02',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Page03"
      component={Page03}
      options={{
        tabBarLabel: 'Page_03',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Page04"
      component={Page04}
      options={{
        tabBarLabel: 'Page_04',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#0B020C',
      },
      headerTitleStyle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'roboto',
      },
      headerTintColor: '#ffffff',
    }}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="grey"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const Page02StackScreen = ({navigation}) => (
  <Page02Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#0B020C',
      },
      headerTitleStyle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'roboto',
      },
      headerTintColor: '#ffffff',
    }}>
    <Page02Stack.Screen
      name="Page 02"
      component={Page02}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="grey"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </Page02Stack.Navigator>
);
