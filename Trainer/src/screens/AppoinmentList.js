import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function AppointmentList() {
  const [people, setPeople] = useState([
    {name: 'upadhi', key: '1'},
    {name: 'upadhi', key: '2'},
    {name: 'upadhi', key: '3'},
    {name: 'upadhi', key: '4'},
    {name: 'upadhi', key: '5'},
    {name: 'upadhi', key: '6'},
    {name: 'upadhi', key: '7'},
  ]);

  return(
    <View style = {StyleSheet.container}>
    <ScrollView>
      {people.map( (item) => {
        return(
          <View key= {item.key}> 
          <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,

  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: '#B0E0E6',
    fontSize: 24

  }
})