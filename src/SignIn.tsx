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

const SignIn = () => {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.container}>
        <Text style={[styles.healthTitle, styles.title]}>
          LOGIN
          <Text style={styles.healthTitleHighligh}>&nbsp; ACCOUNT</Text>
        </Text>
        <View style={styles.formContainer}>
          <Input placeHolder="Username" label="Username" />
          <Input placeHolder="Password" label="Password" />
          <TouchableOpacity style={styles.checkoutBtnWrapper}>
            <Text style={styles.checkoutBtn}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.markerContainer}>
          <Text style={styles.line}></Text>
          <Text style={styles.markerText}>OR</Text>
          <Text style={styles.line}></Text>
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Entypo
              name="facebook-with-circle"
              color={ThemeColors.fb_bg}
              size={45}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Entypo
              name="twitter-with-circle"
              color={ThemeColors.insta_bg}
              size={45}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an Account ?</Text>
          <TouchableOpacity>
            <Text>Sign Up</Text>
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
    marginTop: 36,
    marginBottom: 20,
  },
  checkoutBtn: {
    color: ThemeColors.white,
    fontSize: 14,
    ...fonts.fw_600,
    textAlignVertical: 'center',
    lineHeight: 20,
  },
  forgotPassword: {
    ...fonts.fw_300,
    fontSize: 14,
    marginVertical: 20,
  },
  forgotPasswordText: {
    textAlign: 'center',
    color: ThemeColors.darkslategray,
  },
  markerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    backgroundColor: ThemeColors.darkgray1,
    height: 1,
    flexGrow: 1,
  },
  markerText: {
    width: 40,
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButton: {
    marginVertical: 20
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  signupText: {
    ...fonts.fw_300,
    fontSize: 14,
    color: ThemeColors.darkslategray
  },
});

export default SignIn;
