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

export default function Approve() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
        <Text style={styles.text_header}> Appointment</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={{Trainername: '', AccountNo: '', Payment: '', Zoom: ''}}
            onSubmit={(values, actions) => {
              actions.resetForm();
              console.log(values);
            }}>
            {props => (
              <View>
                <Text style={styles.text_footer}>Trainer Name</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Your Name"
                    onChangeText={props.handleChange('Trainername')}
                    value={props.values.Trainername}
                  />
                </View>

                <Text style={styles.text_footer}>Account Number</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Account Number"
                    onChangeText={props.handleChange('AccountNo')}
                    value={props.values.AccountNo}
                  />
                </View>

                <Text style={styles.text_footer}>Payment Amount</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Payment Amount"
                    onChangeText={props.handleChange('Payment')}
                    value={props.values.Payment}
                  />
                </View>

                <Text style={styles.text_footer}>Zoom Link</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="1"
                    onChangeText={props.handleChange('Zoom')}
                    value={props.values.Zoom}
                  />
                </View>

                <View style={styles.button}>
                  <Button
                    title="Approve Appointment"
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
