import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {WeekCalendar} from 'react-native-calendars';

const HomeScreen = ({navigation}) => {
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
          <View style={styles.alternativeLayoutButtonContainer}>
          <View style={styles.button}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('AppoinmentList')}>
            <LinearGradient
              colors={[colors.color3, colors.color4]}
              >
              <Text >Appointments</Text>
              <MaterialIcons
                // name="keyboard-arrow-right"
                color="#000"
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Dietplans')}>
            <LinearGradient
              colors={[colors.color3, colors.color4]}
              >
              <Text >Diet Plans</Text>
              <MaterialIcons
                // name="keyboard-arrow-right"
                color="#000"
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>  

        
        </View>

        <View style={styles.alternativeLayoutButtonContainer}>
          <View style={styles.button}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('AppoinmentList')}>
            <LinearGradient
              colors={[colors.color3, colors.color4]}
              >
              <Text >Get Start</Text>
              <MaterialIcons
                // name="keyboard-arrow-right"
                color="#000"
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('AppoinmentList')}>
            <LinearGradient
              colors={[colors.color3, colors.color4]}
              >
              <Text >Get Start</Text>
              <MaterialIcons
                // name="keyboard-arrow-right"
                color="#000"
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>  

        
        </View>

          {/* <View style={styles.alternativeLayoutButtonContainer}>
          <Button
      
          onPress={() => navigation.navigate('AppoinmentList')}
            // onPress={this._onPressButton}
            title="Appoinments"
            color="#084887"
            
          />
          <Button
           onPress={() => navigation.navigate('Dietplans')}
            // onPress={this._onPressButton}
            title="Diet Plans"
            color="#084887"
          />
          </View>
        
          <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            // onPress={this._onPressButton}
            title="Self Progress"
            color="#084887"
          />
          <Button
            // onPress={this._onPressButton}
            title="Workouts"
            color="#084887"

          />
          </View> */}
          
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

  container: {
    flex: 1,
    justifyContent: 'center',
   },
   buttonContainer: {
     margin: 10
   },
   button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
   alternativeLayoutButtonContainer: {
     
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom:50,

     flexDirection: 'row',
     justifyContent: 'space-between',
     
 
   }

});

export default HomeScreen;
