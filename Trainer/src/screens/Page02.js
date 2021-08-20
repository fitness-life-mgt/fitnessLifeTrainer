import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Page02 = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Welcome to Page 02!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 24,
  },
});

export default Page02;
