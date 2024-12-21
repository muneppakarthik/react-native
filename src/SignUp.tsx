import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {fonts, ThemeColors} from './Constants/stylesUtiles';
import Input from './components/Input';
import Entypo from 'react-native-vector-icons/Entypo';
import Footer from './components/footer';

const SignUp = () => {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.container}>
        <Text style={[styles.healthTitle, styles.title]}>
          SIGN
          <Text style={styles.healthTitleHighligh}>&nbsp; UP</Text>
        </Text>
        <View style={styles.formContainer}>
          <Input placeHolder="Select a Username" label="Select a Username" />
          <Input placeHolder="Your Email" label="Your Email" />
          <Input placeHolder="Enter a Password" label="Enter a Password" />
          <Input placeHolder="Confirm Password" label="Confirm Password" />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already registered?</Text>
            <TouchableOpacity style={styles.signupHereBtn}>
              <Text style={styles.signInHereTxt}>Sign in here</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.checkoutBtnWrapper}>
            <Text style={styles.checkoutBtn}>SIGN UP NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 30,
    marginBottom: 50,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  healthTitle: {
    ...fonts.fw_600,
    fontSize: 18,
    color: ThemeColors.darkgray,
    textAlign: 'center',
    paddingTop: 10,
  },
  healthTitleHighligh: {
    color: ThemeColors.steelblue,
  },
  formContainer: {
    paddingHorizontal: 12,
  },
  checkoutBtnWrapper: {
    backgroundColor: ThemeColors.steelblue,
    height: 36,
    borderRadius: 6,
    paddingHorizontal: 30,
    paddingVertical: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    margin: 'auto',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  checkoutBtn: {
    color: ThemeColors.white,
    fontSize: 14,
    ...fonts.fw_600,
    textAlignVertical: 'center',
    lineHeight: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginVertical: 40
  },
  signupText: {
    ...fonts.fw_300,
    fontSize: 14,
    color: ThemeColors.darkslategray,
  },
  signupHereBtn: {
    margin: 0,
    padding: 0
  },
  signInHereTxt: {
    ...fonts.fw_300,
    fontSize: 14,
    color: ThemeColors.darkslategray
  }
});

export default SignUp;
