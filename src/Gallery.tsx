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

import Image1 from './assets/images/gallery/gallery1.jpg';
import Image2 from './assets/images/gallery/gallery2.jpg';
import Image3 from './assets/images/gallery/gallery3.jpg';
import Image4 from './assets/images/gallery/gallery4.jpg';
import Image5 from './assets/images/gallery/gallery5.jpg';
import Image6 from './assets/images/gallery/gallery6.jpg';
import Image7 from './assets/images/gallery/gallery7.jpg';
import Image8 from './assets/images/gallery/gallery8.jpg';
import Image9 from './assets/images/gallery/gallery9.jpg';
import Image10 from './assets/images/gallery/gallery10.jpg';
import Footer from './components/footer';

type gallerProps = {
  image: any;
  cat: string[];
};

const Gallery = () => {
  const galleryCategory = ['', 'drink', 'food', 'sport', 'hospital'];
  const [activeCat, setActiveCat] = useState('');
  const data = [
    {
      image: Image7,
      cat: ['sport'],
    },
    {
      image: Image1,
      cat: ['hospital'],
    },
    {
      image: Image10,
      cat: ['drink', 'food'],
    },
    {
      image: Image4,
      cat: ['drink'],
    },
    {
      image: Image6,
      cat: ['food'],
    },
    {
      image: Image3,
      cat: ['hospital'],
    },
    {
      image: Image5,
      cat: ['drink'],
    },
    {
      image: Image9,
      cat: ['drink', 'food'],
    },
    {
      image: Image2,
      cat: ['hospital'],
    },
    {
      image: Image8,
      cat: ['sport'],
    },
  ];
  return (
    <ScrollView
      // nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.container}>
        <Text style={styles.title}>Gallery</Text>
        <View style={styles.buttonWrapper}>
          {galleryCategory.map((i, ind) => (
            <TouchableOpacity
              activeOpacity={0.8}
              hitSlop={{top: 2, left: 2, right: 2, bottom: 2}}
              style={styles.button}
              onPress={() => setActiveCat(i)}>
              <Text
                style={[
                  styles.buttonLabel,
                  activeCat === i ? styles.activeButtonLable : '',
                ]}>
                {i === '' ? 'All' : i}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.imageWrapper}>
          {data
            .filter((i: gallerProps) => activeCat==='' || i.cat.includes(activeCat))
            .map((i: gallerProps, ind: number) => (
              <TouchableOpacity style={styles.gallaryImageBtn}>
                <Image
                  source={i?.image}
                  resizeMode="cover"
                  style={styles.galleryImage}
                />
              </TouchableOpacity>
            ))}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  title: {
    ...fonts.fw_600,
    marginBottom: 30,
    textAlign: 'center',
    color: ThemeColors.steelblue,
    fontSize: 18,
    textTransform: 'uppercase',
  },
  buttonWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginBottom: 30,
  },
  button: {
    borderWidth: 1,
    borderColor: ThemeColors.darkgray,
    borderRadius: 2,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  buttonLabel: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 14,
    ...fonts.fw_600,
    color: ThemeColors.steelblue,
  },
  activeButtonLable: {
    color: ThemeColors.darkgray,
  },
  imageWrapper: {
    rowGap: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gallaryImageBtn: {
    width: '49%',
  },
  galleryImage: {
    width: '100%',
    height: 150,
    borderRadius: 4,
  },
});
