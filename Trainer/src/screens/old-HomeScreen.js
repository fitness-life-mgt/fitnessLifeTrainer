import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../config/colors';

// import MainTabScreen from './MainTabScreen';
import Page02 from './page02';

const Home = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Welcome to Home!</Text>
      <Button
        title="Go to Page 02"
        onPress={() => navigation.navigate('Page 02')}
      />
    </View>
  );
};

const HomeStack = createStackNavigator();
const Page02Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

class FitnessLife extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Page 02" component={Page02StackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 24,
  },
});

export default FitnessLife;
