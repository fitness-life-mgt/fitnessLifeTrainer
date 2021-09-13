import React, { useState, useEffect,Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';


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
   
      <View >
      <Text>upadhi</Text>
        
        {this.state.data.map((item) => (
          <View>
          <Text>{item.id}</Text>
         
           
          </View>
        ))}
          
        
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