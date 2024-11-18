import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {fonts, ThemeColors} from './Constants/stylesUtiles';

import Doctor1 from './assets/images/our-doctors/doctor1.jpg';
import Doctor2 from './assets/images/our-doctors/doctor2.jpg';
import Doctor3 from './assets/images/our-doctors/doctor3.jpg';
import Doctor4 from './assets/images/our-doctors/doctor4.jpg';
import Doctor5 from './assets/images/our-doctors/doctor5.jpg';

import DoctorsCard from './components/DoctorsCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from './components/footer';

const OurDoctors = () => {
  const newsData = [
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
    {
      image: Doctor3,
      name: 'Dr. Eta Doe',
      designation: 'Dermatology Specialist',
      info: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      image: Doctor4,
      name: 'Dr. Tayo',
      designation: 'Dermatology Specialist',
      info: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      image: Doctor5,
      name: 'Dr. Eta Doe',
      designation: 'Dermatology Specialist',
      info: 'Lorem ipsum dolor sit amet, consectetur',
    },
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
    {
      image: Doctor3,
      name: 'Dr. Eta Doe',
      designation: 'Dermatology Specialist',
      info: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      image: Doctor4,
      name: 'Dr. Tayo',
      designation: 'Dermatology Specialist',
      info: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      image: Doctor5,
      name: 'Dr. Eta Doe',
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
          <Text style={styles.title}>
            <Text style={styles.titleHighLight}>OUR &nbsp;</Text>
            DOCTORS
          </Text>
          <Text style={styles.titleInfo}>
            Find our Doctor specialist, Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod.
          </Text>
        </View>

        {/* Health Information */}
        <View style={styles.healthInfoContainer}>
          {/* <Text style={styles.healthTitle}>
            HEALTH
            <Text style={styles.healthTitleHighligh}>&nbsp; INFORMATION</Text>
          </Text> */}
          <View style={styles.healthCardContainer}>
            {newsData.map((i, ind) => (
              <React.Fragment key={i.name + ind}>
                <DoctorsCard {...i} />
              </React.Fragment>
            ))}
          </View>
          {/* <TouchableOpacity style={styles.readMore}>
            <Text style={styles.readMoreText}>
              See More News &nbsp; <Icon name="chevron-right" size={13} />
            </Text>
          </TouchableOpacity> */}
        </View>
        <Footer />
      </ScrollView>
    );
};

export default OurDoctors;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    // marginBottom: 30,
  },
  title: {
    ...fonts.fw_600,
    fontSize: 18,
    color: ThemeColors.steelblue,
    textAlign: 'center',
    paddingTop: 10,
    marginBottom: 10,
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
  //   card
  healthInfoContainer: {
    paddingVertical: 15,
    // paddingHorizontal: 18
    marginBottom: 30
  },
  healthTitle: {
    ...fonts.fw_600,
    fontSize: 18,
    color: ThemeColors.darkgray,
    textAlign: 'center',
    paddingTop: 10,
    marginHorizontal: 20,
    // marginBottom: 20
  },
  healthTitleHighligh: {
    color: ThemeColors.steelblue,
  },
  healthCardContainer: {
    marginTop: 20,
    width: '100%',
  },
  readMore: {
    marginTop: 10,
  },
  readMoreText: {
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
  },
});
