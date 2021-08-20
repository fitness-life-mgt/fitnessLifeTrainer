import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import colors from '../config/colors';
// import {WeekCalendar} from 'react-native-calendars';

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Hi John!</Text>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={require('../assests/images/home.png')}
              style={styles.image_home}
              resizeMode="stretch"
            />
          </View>
          <View>
            <Image
              source={require('../assests/images/homeImage.png')}
              style={styles.image_home}
              resizeMode="stretch"
            />
          </View>
          <Text style={styles.text_home}>Appointments                     Diet Plans</Text>
          <View>
            <Image
              source={require('../assests/images/homeImage2.png')}
              style={styles.image_home2}
              resizeMode="stretch"
            />
          </View>
          <Text style={styles.text_home2}>Schedules                    Self Progress</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: windowWidth,
    backgroundColor: colors.color5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    width: windowWidth,
    backgroundColor: colors.color2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  body: {
    flex: 8,
    width: windowWidth,
    backgroundColor: colors.color5,
  },
  headerText: {
    fontSize: 24,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: colors.color5,
  },
  bodyText: {
    fontSize: 24,
  },
  image_home: {
    height: 200,
    width: windowWidth,
  },
  image_home2: {
    top: -25,
    height: 150,
    width: windowWidth,
  },
  text_home: {
    fontSize: 16,
    fontFamily: 'roboto',
    color: colors.color5,
    left: 40,
    top: -163,
    fontWeight: 'bold',
  },
  text_home2: {
    fontSize: 16,
    fontFamily: 'roboto',
    color: colors.color5,
    left: 60,
    top: -168,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
