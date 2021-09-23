import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

const ContactusScreen = ({navigation}) => {
  return (
    <View style={styles.view}>
    <ScrollView>
      <View style={styles.body}>
        <Animatable.View style={styles.topBody} animation="fadeInDownBig">
          <View style={styles.image_container}>
          <Image
               source={require('../assests/images/logo.png')}
              style={styles.image_user}
              resizeMode="stretch"
            />
          {/*<Animatable.Image
          animation="bounceIn"
          duraton="2000"
          source={require('../assests/images/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />*/}
          </View>
          <View style={styles.body_details}>
            {/* <Text style={styles.textDetails}>Name :</Text> */}
            <Text style={styles.textDetailsLarge}>Fitness Life Gym</Text>
          </View>
        </Animatable.View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
              <Text style={styles.texttitle}>Mr. Wanniarachchi</Text>
              <Text style={styles.textDetailsMedium}> </Text>
              <Text style={styles.textSubtitle}>Address : </Text>
              <Text style={styles.textDetailsMedium}>Fitness life Gym,  kirinda road,  kamburupitiya, Matara</Text> 
              <Text style={styles.textDetailsMedium}> </Text>  
              <Text style={styles.textSubtitle}>Contact Us : </Text>                               
              <Text style={styles.textDetailsMedium}>0774525774</Text>
              <Text style={styles.textDetailsMedium}>wannifitnesslife@gmail.com</Text> 
        </Animatable.View> 
        </View>
        </ScrollView>
      </View>
    
  );
};

const windowWidth = Dimensions.get('window').width;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.25;

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
    flex: 6,
    width: windowWidth,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    //borderTopLeftRadius: 30,
    //borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  topBody: {
    backgroundColor: colors.color2,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    flex: 4,
    paddingBottom: 25,
   // height: 50,
  },
  lowBody: {
    flex: 3,
  },
  headerText: {
    fontSize: 24,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: colors.color5,
    fontFamily: 'roboto',
  },
  bodyText: {
    fontSize: 24,
  },
  image_container: {
    marginTop: 20,
    top: 10,
    alignItems: 'center',
  },
  image_user: {
    width: height_logo,
    height: height_logo,
  },
  body_details: {
    top: 0,
  },
  textDetailsLarge: {
    fontSize: 32,
    fontFamily: 'roboto',
    color: colors.color5,
    textAlign: 'center',
    marginTop: 25,
  },
  textDetailsMedium: {
    fontSize: 18,
    fontFamily: 'roboto',
    color: '#545361',
    textAlign: 'left',
  },
  texttitle: {
    fontSize: 22,
    fontFamily: 'roboto',
    fontWeight: 'bold',
    color: colors.color2,
    textAlign: 'left',
  },
  textSubtitle: {
    fontSize: 20,
    fontFamily: 'roboto',
    fontWeight: 'bold',
    color: '#545361',
    textAlign: 'left',
  },
 
  package: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  textPackage: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  
});

export default ContactusScreen;
