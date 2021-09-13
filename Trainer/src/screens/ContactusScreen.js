import React, { useState } from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import colors from '../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';


export default function MemberDetails({navigation}) {
 
  return(
    <View style = {StyleSheet.container}>
  
      
        
       
        
          <View > 
          <Text style={styles.text_header}>Fitness Life Gym </Text>
          <Text style={styles.text_header_small}>Height(cm) 170</Text>
          <Text style={styles.text_header_small}>weight(kg) 65</Text>
          <Text style={styles.text_header_small}>Age 23</Text>
          
          </View>
   
        
    
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color2,
      },

  text_header_small: {
    color: colors.color2,
    // fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'roboto',
  },

  text_header: {
    color: colors.color2,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'roboto',
  },

})