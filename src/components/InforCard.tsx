import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {fonts, ThemeColors} from '../Constants/stylesUtiles';
import News1 from '../assets/images/Home/news1.jpg';
import News2 from '../assets/images/Home/news2.jpg';
import News3 from '../assets/images/Home/news3.jpg';
interface PropType {
  image: any;
  title: string;
  info: string;
}
const InfoCard = ({image, title, info}: PropType) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.imageBlock}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{info}</Text>
        <TouchableOpacity style={styles.readMore}>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: ThemeColors.lightGray,
    paddingVertical: 20,
    paddingHorizontal: 20,
    // borderRadius: 4,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 13,
    borderBottomColor: ThemeColors.gray1,
    borderBottomWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    ...fonts.fw_600,
    color: ThemeColors.darkslategray,
    lineHeight: 21,
  },
  info: {
    fontSize: 14,
    ...fonts.fw_300,
    color: ThemeColors.darkslategray,
    lineHeight: 20,
    marginBottom: 3,
  },
  imageBlock: {
    flexBasis: 50,
    flexGrow: 0,
    flexShrink: 0,
    width: 'auto',
  },
  infoBlock: {
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  readMore: {
    backgroundColor: ThemeColors.steelblue,
    borderRadius: 5,
    width: 'auto',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
  },
  readMoreText: {
    textAlign: 'center',
    color: ThemeColors.white,
    borderRadius: 5,
    fontSize: 12,
    lineHeight: 19,
    paddingBottom: 1.5,
  },
});
