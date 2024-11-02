import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {fonts, ThemeColors} from '../Constants/stylesUtiles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  const social = ['instagram', 'twitter', 'linkedin', 'facebook-f'];
  const [inputValue, setInputValue] = useState('');
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/Home/bg_profile.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.subContainer}>
          <Text style={styles.subscribe}>SUBSCRIBE</Text>
          <Text style={styles.subInfo}>
            Get healthy news and solutions every day
          </Text>
          <View style={styles.subInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter Email Address ..."
              value={inputValue}
              onChangeText={text => setInputValue(text)}
            />
            <TouchableOpacity style={styles.buttonWrapper}>
              <Icon
                name="chevron-right"
                size={12}
                color={ThemeColors.steelblue}
                style={styles.button}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          {social.map((i, ind) => (
            <View key={ind} style={styles.icon}>
              <Text style={{textAlign: 'center'}}>
                <Icon name={i} size={20} color={ThemeColors.steelblue} />
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.copyRight}>
          <Text style={styles.copyRightText}>
            2020 <Text style={{...fonts.fw_600}}>Asiapp</Text>, All rights
            reserved.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    position: 'absolute',
    right: 35,
    top: 11,
  },
  button: {
    zIndex: 10,
    padding: 2,
    borderColor: ThemeColors.steelblue,
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: 30,
    height: 30,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  subContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#ffffffe0',
  },
  container: {
    backgroundColor: ThemeColors.steelblue,
    paddingHorizontal: 15,
    paddingVertical: 30,
    display: 'flex',
  },
  iconWrapper: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    borderRadius: 50,
    width: 33,
    height: 33,
    backgroundColor: ThemeColors.white,
    textAlign: 'center',
    verticalAlign: 'middle',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  copyRight: {
    marginTop: 20,
    textAlign: 'center',
  },
  copyRightText: {
    textAlign: 'center',
    color: ThemeColors.white,
    ...fonts.fw_400,
    fontSize: 14,
  },
  subscribe: {
    color: ThemeColors.steelblue,
    ...fonts.fw_600,
    fontSize: 18,
    paddingTop: 30,
    textAlign: 'center',
  },
  subInfo: {
    marginVertical: 5,
    ...fonts.fw_300,
    lineHeight: 20,
    color: ThemeColors.darkslategray,
    textAlign: 'center',
    fontSize: 14,
  },
  subInputWrapper: {
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderColor: ThemeColors.steelblue,
    borderWidth: 1,
    borderRadius: 90,
    paddingHorizontal: 8,
    paddingVertical: 10,
    paddingRight: 55,
    paddingLeft: 20,
    color: ThemeColors.darkslategray,
    backgroundColor: ThemeColors.white,
  },
});
