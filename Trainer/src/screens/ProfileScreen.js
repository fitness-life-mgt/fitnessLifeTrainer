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

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View style={styles.body}>
        <Animatable.View style={styles.topBody} animation="fadeInDownBig">
          <View style={styles.image_container}>
            <Image
              source={require('../assests/images/user.png')}
              style={styles.image_user}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.body_details}>
            {/* <Text style={styles.textDetails}>Name :</Text> */}
            <Text style={styles.textDetailsLarge}>Kasun Lakmal</Text>
            <Text style={styles.textDetailsMedium}>kasun@flife.com</Text>
          </View>
        </Animatable.View>
        <View style={styles.button_package}>
        
          <LinearGradient
         
            colors={[colors.color3, colors.color4]}
            style={styles.package}>
             <TouchableOpacity 
              onPress={() => navigation.navigate('EditProfile')}>
            <Text
              style={[
                styles.textPackage,
                {
                  color: colors.color5,
                },
              ]}>
              Edit Profile
            </Text>
          </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity
            onPress={() => navigation.navigate('SplashScreen')}
            style={[
              styles.package,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                borderColor: colors.color3,
                borderWidth: 1,
              },
            ]}>
            <Text
              style={[
                styles.textPackage,
                {
                  color: colors.color3,
                },
              ]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.2;

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
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  topBody: {
    backgroundColor: colors.color2,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    flex: 4,
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
    marginTop: 15,
  },
  textDetailsMedium: {
    fontSize: 20,
    fontFamily: 'roboto',
    color: colors.color1,
    textAlign: 'center',
  },
  textDetailsSmall: {
    fontSize: 16,
    fontFamily: 'roboto',
    color: colors.color1,
    textAlign: 'center',
  },
  button_package: {
    flex: 2.5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 25,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    width: windowWidth,
    paddingLeft: 20,
    paddingRight: 40,
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

export default ProfileScreen;
