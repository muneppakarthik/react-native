import React, {useState} from 'react';
import {fonts, ThemeColors} from './Constants/stylesUtiles';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Footer from './components/footer';
import Input from './components/Input';

const ContactUs = () => {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.container}>
        <Text style={styles.title}>
          CONTACT
          <Text style={styles.titleHighLight}>&nbsp; US</Text>
        </Text>
        <Text style={styles.titleInfo}>
          we are ready 24/7 hours to support.
        </Text>
        <View style={styles.formContainer}>
          <Input placeHolder="Your Name" label="Your Name"/>
          <Input placeHolder="Your Email" label="Your Email" />
          <Input placeHolder="Phone" label="Phone" />
          <Input placeHolder="Subject" label="Subject" />
          <Input placeHolder="Message" label="Message" />
          <TouchableOpacity style={styles.formButtonWrapper}>
            <Text style={styles.formButton}>SEND</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 20,
  },
  title: {
    ...fonts.fw_600,
    fontSize: 18,
    color: ThemeColors.steelblue,
    textAlign: 'center',
    paddingTop: 10,
  },
  titleHighLight: {
    color: ThemeColors.darkgray,
  },
  titleInfo: {
    ...fonts.fw_300,
    fontSize: 14,
    marginVertical: 3,
    color: ThemeColors.darkslategray,
    textAlign: 'center',
  },
  formContainer: {
    marginTop: 20,
  },
  formButtonWrapper: {
    backgroundColor: ThemeColors.steelblue,
    marginTop: 30,
    paddingHorizontal: 32,
    paddingTop: 5,
    paddingBottom: 2,
    borderRadius: 4,
  },
  formButton: {
    textAlign: 'center',
    color: ThemeColors.white,
    ...fonts.fw_300,
    fontSize: 16,
  },
});
