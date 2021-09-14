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

const Approve = ({navigation}) => {
 
  const [datetext, setdatetext] = useState('');
  const [timetext, settimetext] = useState('');
  const [zoomtext, setzoomtext] = useState('');

  

  const Appionment  = ( date, time,zoom) => {
    const x = {
      
      date: date,
      time: time,
      zoom: zoom,
    
    };

    axios.post('http://localhost:8088/approve',x).then(res=>{
      if(res.data==='SUCCESS')navigation.navigate('Tabs');
      })
      .catch(error => {
        console.log(error);
      });
  };



  return (
    
      <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
        <Text style={styles.text_header}>Give Appoinment</Text>
      </View>

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* To get the phone number */}
        <View>
          <Text style={styles.text_footer}>Date of Appoinment </Text>
          <View style={styles.action}>

            <TextInput
              style={styles.textInput}
              placeholder="DD/MM/YYYY"
              autoCapitalize="none"
              name="datetext"
              value={datetext}
                 onChangeText={val => setdatetext(val)}
            />
          </View>

          {/* password */}
          <Text style={styles.text_footer}>Time of Appointment</Text>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              placeholder="HH:MM"
              autoCapitalize="none"
              name="timetext"
              value={timetext}
              onChangeText={val => settimetext(val)}
            />
          </View>
          <Text style={styles.text_footer}>Zoom link</Text>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              placeholder="link"
              autoCapitalize="none"
              name="zoomtext"
              value={zoomtext}
              onChangeText={val => setzoomtext(val)}
            />
          </View>

          <View style={styles.button}>
          <TouchableOpacity
            onPress={() =>
              Appionment( datetext, timetext,zoomtext)
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
                Send
              </Text>
            </LinearGradient>
            </TouchableOpacity>
          </View>
          </View>
          </ScrollView>
        </Animatable.View>
      </View>
    
  );
};

export default Approve;

const styles = StyleSheet.create({
  container: {
    flex:1,
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
    flex: 3,
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
  textDetailsMedium: {
    fontSize: 20,
    fontFamily: 'roboto',
    color: colors.color1,
    textAlign: 'left',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 8,
  },
  action: {
    flexDirection: 'row',
    //marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: -5,
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
    justifyContent: 'center',
    //marginTop: 10,
    borderColor: colors.color3,
    backgroundColor: colors.color3,
    borderWidth: 1,
    marginTop: 22,
    borderRadius: 10,
    padding: 10,
    
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
  
});
