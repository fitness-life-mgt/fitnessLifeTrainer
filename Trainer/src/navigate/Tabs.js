import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

import HomeScreen from '../screens/HomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import MusicScreen from '../screens/MemberScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ContactusScreen from '../screens/ContactusScreen';
// import {Colors} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#000000">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'yellow',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Members"
        component={MusicScreen}
        options={{
          tabBarLabel: 'Members',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="music" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About Us"
        component={ContactusScreen}
        options={{
          tabBarLabel: 'About Us',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeStackScreen} />
    //   <Tab.Screen name="Page02" component={Page02} />
    //   <Tab.Screen name="Page03" component={Page03} />
    //   <Tab.Screen name="Page04" component={Page04} />
    // </Tab.Navigator>
  );
};

export default Tabs;
