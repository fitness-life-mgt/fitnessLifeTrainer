import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';



import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import Tabs from '../navigate/Tabs';


const RootStack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: 'transparent',
    },
  };

  const RootStackScreen = ({navigation}) => {
    return (
      <NavigationContainer theme={theme}>
   
        <RootStack.Navigator headerMode="screen">
          <RootStack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              title: '',
             
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <RootStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: '',
              
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />

          <RootStack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              title: '',
              
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
         <RootStack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              title: '',
              
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          
          
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };
  export default RootStackScreen;

  