import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import Images from '../config/images';

class Welcome extends Component {
  render() {
    return (
      <ImageBackground source={Images.welcomeBg} style={styles.welcomeBg} />
    );
  }
}

const styles = StyleSheet.create({
  welcomeBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Welcome;
