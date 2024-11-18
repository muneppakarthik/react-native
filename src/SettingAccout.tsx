import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fonts, ThemeColors} from './Constants/stylesUtiles';

import Image1 from './assets/images/Home/profile5.jpg';
import Footer from './components/footer';
import Input from './components/Input';

const SettingAccout = () => {
  return (
    <ScrollView
      // nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.container}>
        <Text style={styles.title}>
          <Text style={styles.titleHighLight}>Setting &nbsp;</Text>
          Account
        </Text>
        <Image source={Image1} style={styles.image} />
        <Text style={styles.imageInfo}>Photo (130 * 130)</Text>
        <View style={styles.formContainer}>
          <Input placeHolder="Jane" label="First Name" showLabel={true} />
          <Input placeHolder="Doe" label="Last Name" showLabel={true} />
          <Input placeHolder="email@email.com" label="Email" showLabel={true} />
          <Input placeHolder="+918655358954" label="Phone" showLabel={true} />
          <Input
            placeHolder="Wijilan St, Yogyakarta, Indonesia"
            label="Address"
            showLabel={true}
          />
          <TouchableOpacity style={styles.formButtonWrapper}>
            <Text style={styles.formButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default SettingAccout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  title: {
    ...fonts.fw_600,
    fontSize: 18,
    color: ThemeColors.steelblue,
    textAlign: 'center',
    paddingTop: 10,
    marginBottom: 40,
    textTransform: 'uppercase',
  },
  titleHighLight: {
    color: ThemeColors.darkgray,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 4,
  },
  imageInfo: {
    marginTop: 1,
    marginBottom: 10,
    fontSize: 12,
    ...fonts.fw_300,
    color: ThemeColors.darkgray,
  },
  formContainer: {
    marginTop: 20,
  },
  formButtonWrapper: {
    backgroundColor: ThemeColors.steelblue,
    marginTop: 30,
    paddingHorizontal: 22,
    paddingTop: 5,
    paddingBottom: 2,
    borderRadius: 4,
    width: 120,
    margin: 'auto',
    marginBottom: 10
  },
  formButton: {
    textAlign: 'center',
    color: ThemeColors.white,
    ...fonts.fw_300,
    fontSize: 16,
    textTransform: 'uppercase'
  },
});
