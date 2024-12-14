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
import Image1 from './assets/images/gallery/gallery1.jpg';
import Image2 from './assets/images/gallery/gallery2.jpg';
import Image3 from './assets/images/gallery/gallery3.jpg';
import Image4 from './assets/images/gallery/gallery4.jpg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Footer from './components/footer';

interface ListPropsType {
  title: string;
  date: string;
  des: string;
  image: any;
}

const NewsList = () => {
  const newsList: ListPropsType[] = [
    {
      title: 'Drink to Your Health: Healthy Drink Every Day',
      date: 'January 28, 2019',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi sit aperiam quia volup tatem odio, facere iusto magni sunt',
      image: Image1,
    },
    {
      title: 'Drink to Your Health: Healthy Drink Every Day',
      date: 'January 28, 2019',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi sit aperiam quia volup tatem odio, facere iusto magni sunt',
      image: Image2,
    },
    {
      title: 'Drink to Your Health: Healthy Drink Every Day',
      date: 'January 28, 2019',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi sit aperiam quia volup tatem odio, facere iusto magni sunt',
      image: Image3,
    },
    {
      title: 'Drink to Your Health: Healthy Drink Every Day',
      date: 'January 28, 2019',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi sit aperiam quia volup tatem odio, facere iusto magni sunt',
      image: Image4,
    },
  ];
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.container}>
        <Text style={styles.title}>
          <Text style={styles.titleHighLight}>NEWS &nbsp;</Text>
          BLOG
        </Text>
        <View style={styles.blogContainer}>
          {newsList?.map((item, ind:number) => (
            <View style={styles.cardContainer} key={ind}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.date}>
                <FontAwesome name="calendar-o" size={14} /> &nbsp; {item.date}
              </Text>
              <Text style={styles.description}>{item.des}</Text>
              <TouchableOpacity style={styles.readmore}>
                <Text style={styles.readmoreLabel}>Read More</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 26,
    backgroundColor: ThemeColors.white,
    flexGrow: 1,
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
  blogContainer: {
    marginBottom: 30
  },
  cardContainer: {
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: ThemeColors.darkgray,
    paddingTop: 10
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 212,
    borderRadius: 10,
    marginBottom: 5,
  },
  cardTitle: {
    marginVertical: 10,
    ...fonts.fw_600,
    color: ThemeColors.steelblue,
    fontSize: 18,
    lineHeight: 20,
  },
  date: {
    color: ThemeColors.darkgray,
    fontSize: 14,
  },
  description: {
    marginVertical: 7,
    color: ThemeColors.darkslategray,
    fontSize: 14,
    lineHeight: 18,
    ...fonts.fw_300,
  },
  readmore: {
    backgroundColor: ThemeColors.steelblue,
    color: ThemeColors.white,
    fontSize: 12,
    marginTop: 10,
    width: 'auto',
    alignSelf: 'flex-start',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    paddingTop: 4,
  },
  readmoreLabel: {
    color: ThemeColors.white,
    ...fonts.fw_500,
    fontSize: 12,
  },
});
