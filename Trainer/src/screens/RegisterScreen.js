import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';
import PhoneInput from 'react-native-phone-number-input';

const RegisterScreen = ({navigation}) => {
  const [fnametext, setfnametext] = useState('');
  const [lnametext, setlnametext] = useState('');
  const [emailtext, setemailtext] = useState('');
  const [phonetext, setphonetext] = useState('');
  const [passwordtext, setpasswordtext] = useState('');
  const [cpasswordtext, setcpasswordtext] = useState('');

  

  const SignUp = (firstName,lastName, email, telephone, password, cpassword) => {
    const x = {
      firstName: firstName,
      lastName:lastName,
      email: email,
      telephone: telephone,
      password: password,
      cpassword: cpassword,
    
    };

    axios
      .post('http://localhost:8088/register', x)
      .then(res => {
        if (res.data == 'SUCCESS') {
          navigation.navigate('MainTabScreen');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.lenght != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };
  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };






  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
          <Text style={styles.text_header}>Register Yourself!</Text>
          <Text style={styles.text_header_small}>
            Your Gym is Waiting for you!
          </Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>First name</Text>
          <View style={styles.action}>
          
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              name="fnametext"
              value={fnametext}
              onChangeText={val =>  setfnametext(val)}
            />
            {data.check_textInputChangeFirstName ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color={colors.color2} size={20} />
              </Animatable.View>
            ) : null}
          </View>

          {/* To get the last name */}
          <Text style={styles.text_footer}>Last Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="grey" size={20} />
            <TextInput
              placeholder="Your Full Name"
              style={styles.textInput}
              autoCapitalize="none"
              name="lnametext"
              value={lnametext}
              onChangeText={val => setlnametext(val)}
            />
            {data.check_textInputChangeLastName ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color={colors.color2} size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {/* To get the email */}
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="envelope" color="grey" size={20} />
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              name="emailtext"
              value={emailtext}
              onChangeText={val => setemailtext(val)}
            />
            {data.check_textInputChangeEmail ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color={colors.color2} size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {/* To get the phone number */}
          <Text style={styles.text_footer}>Contact No.</Text>
          <View style={styles.action}>
            <FontAwesome name="phone" color="grey" size={20} />

            <TextInput
              placeholder="Your Contact Number"
              style={styles.textInput}
              autoCapitalize="none"
              name="phonetext"
              value={phonetext}
                 onChangeText={val => setphonetext(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color={colors.color2} size={20} />
              </Animatable.View>
            ) : null}
          </View>

          {/* password */}
          <Text style={styles.text_footer}>Password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="grey" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              name="passwordtext"
              value={passwordtext}
              onChangeText={val => setpasswordtext(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color={colors.color2} size={20} />
              ) : (
                <Feather name="eye" color={colors.color2} size={20} />
              )}
            </TouchableOpacity>
          </View>
          {/* confirm password */}
          <Text style={styles.text_footer}>Confirm Password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="grey" size={20} />
            <TextInput
              placeholder="Re-enter Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              name="cpasswordtext"
              value={cpasswordtext}
              onChangeText={val => setcpasswordtext(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color={colors.color2} size={20} />
              ) : (
                <Feather name="eye" color={colors.color2} size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
          <TouchableOpacity
            onPress={() =>
              SignUp(fnametext,lnametext, emailtext, phonetext, passwordtext, cpasswordtext)
            }>
            <LinearGradient
              colors={[colors.color3, colors.color4]}
              //style={styles.signIn}
              >
              <Text
                style={[
                  styles.textSign,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    color: '#ffffff',
                  },
                ]}>
                Register
              </Text>
            </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLog}>
          <TouchableOpacity
              
               onPress={() => navigation.navigate('LoginScreen')}
              style={[
                styles.signIn,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  //borderColor: colors.color3,
                  //borderWidth: 1,
                  marginTop: 10,
                },
              ]}>
              <Text
                style={[
                  styles.textLog,
                  {
                    color:  colors.color3,
                  },
                ]}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color2,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    fontFamily: 'roboto',
    paddingTop: 30,
  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: colors.color5,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'roboto',
  },
  text_header_small: {
    color: colors.color5,
    // fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'roboto',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    // height: 20,
    // width: 100,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    //marginTop: 10,
    borderColor: colors.color3,
    backgroundColor: colors.color3,
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 10,
    padding: 12,
    
  },
  buttonLog: {
    alignItems: 'center',
    borderColor: colors.color3,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
   // padding: 5,
    
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    //borderRadius: 10,
    
  },
  textSign: {
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: colors.color3,
    alignItems: 'center',
    
  },
  textLog: {
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    
  },
});
