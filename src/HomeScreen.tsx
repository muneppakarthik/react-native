import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {fonts, ThemeColors} from './Constants/stylesUtiles';
import Doctor from './assets/images/Home/doctor.png';
import Header from './components/header/Header';
import Feature from './components/feature/feature';
import InfoCard from './components/InforCard';

const CareImage = require('./assets/images/care.png');
const HospitalImage = require('./assets/images/Home/hospital.png');
const DoctorImage = require('./assets/images/Home/doctor.png');
const StoreImage = require('./assets/images/Home/store.png');
const MedicalImage = require('./assets/images/Home/medical_report.png');
const StethoscopeImage = require('./assets/images/Home/stethoscope.png');
const PromoImage = require('./assets/images/Home/promo.jpg');
// news
import News1 from './assets/images/Home/news1.jpg';
import News2 from './assets/images/Home/news2.jpg';
import News3 from './assets/images/Home/news3.jpg';
import Footer from './components/footer';

const HomeScreen = ({navigation}: any) => {
  const fetaturesData = [
    {
      image: CareImage,
      title: 'Asurance',
    },
    {
      image: HospitalImage,
      title: 'Find Hospital',
    },
    {
      image: DoctorImage,
      title: 'Find Doctor',
    },
    {
      image: StoreImage,
      title: 'Find Medicine',
    },
    {
      image: MedicalImage,
      title: 'Medical Records',
    },
    {
      image: StethoscopeImage,
      title: 'Health Information',
    },
  ];
  const newsData = [
    {
      image: News1,
      title: 'Benefits of ginger drink',
      info: 'Consectetur adipiscing elit, magna aliqua...',
    },
    {
      image: News2,
      title: 'How to maintain body',
      info: 'sed do eiusmod tempor incididunt...',
    },
    {
      image: News3,
      title: 'Benefits of ginger drink',
      info: 'Consectetur adipiscing elit, magna aliqua...',
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Features */}
        <View style={styles.features}>
          {fetaturesData.map(i => (
            <React.Fragment key={i.title}>
              <Feature {...i} />
            </React.Fragment>
          ))}
        </View>
        {/* Chat Doctor */}
        <View style={styles.bg}>
          <Image
            source={PromoImage}
            style={{width: '100%', height: '100%', borderRadius: 14}}
            resizeMode="contain"
          />
        </View>
        {/* Health Information */}
        <View style={styles.healthInfoContainer}>
          <Text style={styles.healthTitle}>
            HEALTH
            <Text style={styles.healthTitleHighligh}>&nbsp; INFORMATION</Text>
          </Text>
          <View style={styles.healthCardContainer}>
            {newsData.map((i, ind) => (
              <React.Fragment key={i.title + ind}>
                <InfoCard {...i} />
              </React.Fragment>
            ))}
          </View>
          <TouchableOpacity style={styles.readMore}>
            <Text style={styles.readMoreText}>See More News &nbsp; <Icon name="chevron-right" size={13} /></Text>
          </TouchableOpacity>
        </View>
        {/* <Text style={{...fonts.fw_100, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_200, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_300, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_400, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_500, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_600, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_700, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_800, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Image
        source={Doctor}
        style={{width: 200,height:200}}
      />
      <Text style={{...fonts.fw_900, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Image
        source={CareImage}
        style={{width: 200,height:200}}
      />
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go To Notifications"
      /> */}
      </View>
      <Footer />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
    paddingHorizontal: 15,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 15,
    marginVertical: 20,
    paddingVertical: 16,
  },
  bg: {
    width: '100%',
    borderRadius: 14,
    height: 105,
  },
  healthInfoContainer: {
    paddingVertical: 15,
    // paddingHorizontal: 18
  },
  healthTitle: {
    ...fonts.fw_600,
    fontSize: 18,
    color: ThemeColors.darkgray,
    textAlign: 'center',
    paddingTop: 10,
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
    marginTop: 10
  },
  readMoreText: {
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
    fontSize: 14
  }
});
