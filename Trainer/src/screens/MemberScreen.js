import React, { useState, useEffect,Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SectionList
} from 'react-native';

import colors from '../config/colors';
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
  axios.get('http://localhost:8088/memberList' ).then(res=>{
        console.log(res);
      this.setState({
        data:res.data,
        });
      });

}
render(){

  return(
  
      <View style={styles.container}>
    
      <ScrollView>
        {this.state.data.map((item) => (
         
          <View style={styles.item}>
        
          <Text  style={styles.text_header}>Member Name - {item.firstName}  {item.lastName}</Text>
          <Text style={styles.text_header_small}>Age- {item.age}</Text>
          <Text style={styles.text_header_small}>weight(Kg)- {item.weight}</Text>
          <Text style={styles.text_header_small}>Height(cm) {item.height}</Text>
         
          </View>
        
        ))}
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

  },

  text_header_small: {
    color: colors.color2,
    // fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'roboto',
  },

  text_header: {
    color: colors.color2,
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'roboto',
  },
});