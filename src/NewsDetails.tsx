import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {fonts, ThemeColors} from './Constants/stylesUtiles';
import Image1 from './assets/images/gallery/gallery4.jpg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Footer from './components/footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Doctor1 from './assets/images/our-doctors/doctor1.jpg';
import Doctor2 from './assets/images/our-doctors/doctor2.jpg';
import DoctorsCard from './components/DoctorsCard';
import Input from './components/Input';

const NewsDetails = () => {
  const itemInfo = {
    title: 'Drink to Your Health: Healthy Drink Every Day',
    date: 'January 28, 2019',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi sit aperiam quia volup tatem odio, facere iusto magni sunt Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    des1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi sit aperiam quia volup tatem odio.',
    image: Image1,
  };
  const social = ['instagram', 'twitter', 'linkedin', 'facebook-f'];

  const commentsData = [
    {
      image: Doctor1,
      name: 'Dr. Eta Doe',
      designation: 'Dermatology Specialist',
      info: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      image: Doctor2,
      name: 'Dr. John Doe',
      designation: 'Dermatology Specialist',
      info: 'Lorem ipsum dolor sit amet, consectetur',
    },
  ];
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.container}>
        <View style={styles.blogContainer}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{itemInfo.title}</Text>
            <Text style={styles.date}>
              <FontAwesome name="calendar-o" size={14} /> {itemInfo.date}
            </Text>
            <Image source={itemInfo.image} style={styles.image} />
            <Text style={styles.description}>{itemInfo.des}</Text>
            <Text style={styles.description}>{itemInfo.des1}</Text>
          </View>
        </View>
        {/* social share */}
        <View style={styles.socialBlock}>
          <Text>Share:</Text>
          <View style={styles.socialWrapper}>
            {social.map(socialIcon => (
              <TouchableOpacity style={styles.buttonWrapper}>
                <Icon
                  name={socialIcon}
                  size={15}
                  color={ThemeColors.steelblue}
                  style={styles.buttonSocial}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* comments */}
        <View style={styles.commentsContainer}>
          <Text style={styles.commentsTile}>2 Comments</Text>
          <View style={styles.healthCardContainer}>
            {commentsData.map((i, ind) => (
              <React.Fragment key={i.name + ind}>
                <DoctorsCard {...i} />
              </React.Fragment>
            ))}
          </View>
        </View>
        {/* Comment Form */}
        <View style={styles.commentsContainer}>
          <Text style={styles.commentsTile}>Leave a Reply</Text>
          <View>
            <Input placeHolder="Name" label="Name" />
            <Input placeHolder="Email" label="Email" />
            <Input placeHolder="Website" label="Website" />
            <Input placeHolder="Comments" label="Comments" />
            <TouchableOpacity style={styles.formButtonWrapper}>
              <Text style={styles.formButton}>Post Comment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 26,
    backgroundColor: ThemeColors.white,
    flexGrow: 1,
  },
  blogContainer: {
    marginBottom: 30,
  },
  cardContainer: {
    paddingTop: 20,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 212,
    marginBottom: 5,
  },
  cardTitle: {
    marginBottom: 14,
    ...fonts.fw_400,
    color: ThemeColors.darkslategray,
    fontSize: 25,
    lineHeight: 30,
  },
  date: {
    color: ThemeColors.darkslategray,
    fontSize: 14,
    ...fonts.fw_300,
    marginBottom: 20,
  },
  description: {
    marginVertical: 7,
    color: ThemeColors.darkslategray,
    fontSize: 14,
    lineHeight: 18,
    ...fonts.fw_300,
  },
  socialBlock: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 25,
  },
  socialWrapper: {
    flexDirection: 'row',
    gap: 5,
  },
  buttonWrapper: {
    backgroundColor: ThemeColors.steelblue,
    padding: 5,
    borderRadius: 2,
  },
  buttonSocial: {
    color: ThemeColors.white,
  },
  commentsContainer: {
    marginVertical: 20,
  },
  commentsTile: {
    ...fonts.fw_500,
    fontSize: 18,
    paddingBottom: 2,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: ThemeColors.gray,
    color: ThemeColors.darkslategray,
  },
  healthCardContainer: {
    marginTop: 20,
    width: '100%',
  },
  formButtonWrapper: {
    backgroundColor: ThemeColors.steelblue,
    marginTop: 15,
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

export default NewsDetails;
