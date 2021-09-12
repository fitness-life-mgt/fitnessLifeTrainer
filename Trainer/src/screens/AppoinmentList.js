import React, { useState, useEffect } from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Component } from 'react';
import axios from 'axios';


export default class App extends Component{
  
  // constructor(props){
  //   super(props)
  // }
  state ={
    data:[],
    // id,
}
componentDidMount(){
  axios.get('http://localhost:8088/memberList').then(res=>{
        console.log(res);
      this.setState({
        data:res.data,
        });
      });

}
render(){

  return(
    <View style = {StyleSheet.container}>
    <ScrollView>
      {this.state.data.map( (item) => {
        
        return(
          <TouchableOpacity 
          onPress={() => navigation.navigate('Approve')}>
          <View > 
          <Text style={styles.item}>{item.fname}</Text>
          
          </View>
         </TouchableOpacity>
        )
      })}
      </ScrollView>
    </View>
  );
}
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
});