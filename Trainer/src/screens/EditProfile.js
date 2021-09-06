import React from 'react';
import {Formik} from 'formik';
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import colors from '../config/colors';
import * as Animatable from 'react-native-animatable';

export default function MakeAppointment() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
        <Text style={styles.text_header}>Request Your Appointment</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={{name: '', date: '', time: '', duration: ''}}
            onSubmit={(values, actions) => {
              actions.resetForm();
              console.log(values);
            }}>
            {props => (
              <View>
                <Text style={styles.text_footer}>Name</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Name"
                    onChangeText={props.handleChange('name')}
                    value={props.values.name}
                  />
                </View>

                <Text style={styles.text_footer}>Date of Appointment</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="DD/MM/YYYY"
                    onChangeText={props.handleChange('date')}
                    value={props.values.date}
                  />
                </View>

                <Text style={styles.text_footer}>Time of Appointment</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="HH:MM"
                    onChangeText={props.handleChange('time')}
                    value={props.values.time}
                  />
                </View>

                <Text style={styles.text_footer}>Number of Hours</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="1"
                    onChangeText={props.handleChange('duration')}
                    value={props.values.duration}
                  />
                </View>

                <View style={styles.button}>
                  <Button
                    title="Request Appointment"
                    color={colors.color3}
                    onPress={props.handleSubmit}
                  />
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color2,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    fontFamily: 'roboto',
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'roboto',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 8,
  },
  action: {
    flexDirection: 'row',
    // marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    // paddingBottom: ,
    marginBottom: -5,
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
    marginTop: -5,
    paddingLeft: 10,
    // paddingBottom: 40,
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
    marginTop: 20,
    fontFamily: 'roboto',
    justifyContent: 'center',
    // borderRadius: 100,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
