import React from 'react';
import {View, StyleSheet, Text, Image, StyleProp, ViewStyle} from 'react-native';
import { ThemeColors, fonts } from '../../Constants/stylesUtiles';
const Assurance = require('../../assets/images/care.png');
interface PropType {
    image: any,
    title: string,
    style?: StyleProp<ViewStyle>
}
const Feature = ({image, title, style}:PropType) => {
  return (
    <View style={[styles.features,style]}>
      <Image
        source={image}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Feature;

const styles = StyleSheet.create({
  features: {
    // marginTop: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColors.white,
    shadowColor: ThemeColors.darkgray,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 10,
    width: '30%'
  },
  image: {
    width: 37,
    height:37,

  },
  title:{
    ...fonts.fw_600,
    color: ThemeColors.darkslategray,
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center'
  }
});
