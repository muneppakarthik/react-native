import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {fonts, ThemeColors} from '../Constants/stylesUtiles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PropType {
  image: any;
  name: string;
  info: string;
  designation: string;
}
const DoctorsCard = ({image, name, info, designation}: PropType) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.imageBlock}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.designation}>{designation}</Text>
        <Text style={styles.info}>{info}</Text>
        <View style={styles.social}>
          <Icon
            name="facebook-f"
            size={15}
            style={[styles.socialIcons, {backgroundColor: ThemeColors.fb_bg}]}
          />
          <Icon
            name="twitter"
            size={15}
            style={[
              styles.socialIcons,
              {backgroundColor: ThemeColors.insta_bg},
            ]}
          />
          <Icon
            name="linkedin"
            size={15}
            style={[
              styles.socialIcons,
              {backgroundColor: ThemeColors.linked_bg},
            ]}
          />
        </View>
        {/* <TouchableOpacity style={styles.readMore}>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default DoctorsCard;

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: ThemeColors.lightGray,
    paddingVertical: 20,
    paddingHorizontal: 20,
    // borderRadius: 4,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 17,
    borderBottomColor: ThemeColors.gray1,
    borderBottomWidth: 1,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 90,
  },
  name: {
    fontSize: 18,
    ...fonts.fw_600,
    color: ThemeColors.steelblue,
    lineHeight: 27,
  },
  info: {
    fontSize: 14,
    ...fonts.fw_300,
    color: ThemeColors.darkslategray,
    lineHeight: 22,
    marginBottom: 7,
  },
  designation: {
    fontSize: 14,
    ...fonts.fw_600,
    color: ThemeColors.gray2,
    lineHeight: 20,
    marginBottom: 3,
  },
  imageBlock: {
    flexBasis: 90,
    flexGrow: 0,
    flexShrink: 0,
    width: 'auto',
  },
  infoBlock: {
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  social: {
    flexDirection: 'row',
    gap: 5,
  },
  socialIcons: {
    // backgroundColor: ThemeColors.steelblue,
    borderRadius: 50,
    width: 25,
    height: 25,
    color: ThemeColors.white,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
});
