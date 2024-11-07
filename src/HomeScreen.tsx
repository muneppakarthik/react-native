import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {fonts, ThemeColors} from './Constants/stylesUtiles';
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
import Slider1 from './assets/images/Home/slide.jpg';
import Slider2 from './assets/images/Home/slide2.jpg';
import ReviewImage1 from './assets/images/Home/profile4.jpg';
import ReviewImage2 from './assets/images/Home/profile5.jpg';
import ReviewImage3 from './assets/images/Home/profile6.jpg';
// products
import Product1 from './assets/images/Home/product.jpg';
import Product2 from './assets/images/Home/product4.jpg';
import Product3 from './assets/images/Home/product2.jpg';
import Product4 from './assets/images/Home/product3.jpg';
import Product5 from './assets/images/Home/product4.jpg';
import Product6 from './assets/images/Home/product5.jpg';
import Product7 from './assets/images/Home/product6.jpg';

import Carousel from 'react-native-reanimated-carousel';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  GestureHandlerRootView,
  // GestureHandler,
} from 'react-native-gesture-handler';

const HomeScreen = () => {
  const [carouselWidth, setCarouselWidth] = useState(
    Dimensions.get('window').width,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const SliderItem = [
    {
      id: 1,
      image: Slider1,
    },
    {
      id: 2,
      image: Slider2,
    },
  ];

  const ProductSliderItem = [
    {
      id: 1,
      image: Product1,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
    },
    {
      id: 2,
      image: Product2,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
    },
    {
      id: 3,
      image: Product3,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
    },
    {
      id: 4,
      image: Product4,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
    },
    {
      id: 5,
      image: Product5,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
    },
    {
      id: 6,
      image: Product6,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
    },
    {
      id: 7,
      image: Product7,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
    },
  ];
  const RatingSliderItem = [
    {
      id: 1,
      image: ReviewImage1,
      title: 'Elly Doe',
      des: 'Best place and fast respond, Thank You!',
      designation: 'Entrepreneur',
    },
    {
      id: 1,
      image: ReviewImage2,
      title: 'Elly Doe',
      des: 'Best place and fast respond, Thank You!',
      designation: 'Entrepreneur',
    },
    {
      id: 1,
      image: ReviewImage3,
      title: 'Elly Doe',
      des: 'Best place and fast respond, Thank You!',
      designation: 'Entrepreneur',
    },
  ];

  useEffect(() => {
    const updateWidth = () => {
      setCarouselWidth(Dimensions.get('window').width);
    };

    // Debounce orientation changes
    const debounceUpdateWidth = setTimeout(updateWidth, 200);

    const subscription = Dimensions.addEventListener('change', () => {
      clearTimeout(debounceUpdateWidth);
      updateWidth();
    });

    return () => {
      clearTimeout(debounceUpdateWidth);
      subscription?.remove();
    };
  }, []);
  const carouselRef = useRef(null);
  const handleDotPress = (index: any) => {
    setCurrentIndex(index);
    // carouselRef.current.scrollToIndex(index); // Scroll to the selected index
  };
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      {/* Banner carousel slider */}
      {/* <GestureHandlerRootView> */}
      <Carousel
        loop
        width={carouselWidth}
        height={carouselWidth > 400 ? 300 : 200}
        autoPlay={true}
        data={SliderItem}
        scrollAnimationDuration={1500}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Image
              source={item.image}
              style={styles.carouselImage}
              resizeMode="cover"
            />
          </View>
        )}
      />
      {/* </GestureHandlerRootView> */}
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
            style={{width: '100%', height: '100%', borderRadius: 14, flex: 1}}
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
            <Text style={styles.readMoreText}>
              See More News &nbsp; <Icon name="chevron-right" size={13} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* producs */}
      <View style={styles.productContainer}>
        <Text style={[styles.healthTitle, styles.productTitle]}>
          OUR
          <Text style={styles.healthTitleHighligh}>&nbsp; PRODUCTS</Text>
        </Text>
        <Carousel
          // ref={carouselRef}
          loop
          width={carouselWidth}
          // itemWidth={155}
          height={320}
          // autoPlay={true}
          data={ProductSliderItem}
          scrollAnimationDuration={1500}
          mode="parallax" // Optional: gives a nice parallax effect
          modeConfig={{
            parallaxScrollingOffset: 50, // Adjust for spacing between items
            parallaxScrollingScale: 0.9, // Optional: scale effect
          }}
          renderItem={({item}) => (
            <View style={styles.productWrapper}>
              <Text style={styles.productImage}>
                <Image
                  source={item.image}
                  style={{
                    width: 74,
                    height: 62,
                    marginHorizontal: 'auto',
                    position: 'absolute',
                  }}
                  resizeMode="contain"
                />
              </Text>
              <Text style={styles.productName}>{item.title}</Text>
              <Text style={styles.productDetails}>{item.des}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <TouchableOpacity style={styles.buyNow}>
                <Text style={styles.buyNowText}>BUY</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      {/* customer reviews */}
      <View style={styles.customerReview}>
        <Text style={styles.reviewTitle}>CUSTOMER REVIEWS</Text>
        <Carousel
          // ref={carouselRef}
          loop
          width={carouselWidth}
          height={300}
          autoPlay={false}
          data={RatingSliderItem}
          scrollAnimationDuration={1500}
          // pagingEnabled
          // onSnapToItem={index => setCurrentIndex(index)}
          // onSnapToItem={index => setCurrentIndex(index)}
          // currentIndex={currentIndex}
          onSnapToItem={index => setCurrentIndex(index)}
          renderItem={({item}) => (
            <View style={styles.reviewContainer}>
              <Image
                source={item.image}
                style={styles.reviewImage}
                resizeMode="contain"
              />
              <View style={styles.rating}>
                {Array.from({length: 5}).map((_, i) => (
                  <Text key={i}>
                    <Icon name="star" size={16} color={ThemeColors.gold} />
                  </Text>
                ))}
              </View>
              <Text style={styles.reviewDec}>{item.des}</Text>
              <Text style={styles.reviewerName}>{item.title}</Text>
              <Text style={styles.reviewerDesignation}>{item.designation}</Text>
            </View>
          )}
        />
        {/* dots */}
        <View style={styles.dotsContainer}>
          {RatingSliderItem.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleDotPress(index)}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: ThemeColors.white,
    margin: 5,
  },
  activeDot: {
    // backgroundColor: , // Active dot color
    width: 30,
  },
  buyNowText: {
    ...fonts.fw_600,
    fontSize: 12,
    backgroundColor: ThemeColors.steelblue,
    color: ThemeColors.white,
    borderRadius: 30,
    margin: 'auto',
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  buyNow: {
    marginBottom: 15,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    margin: 'auto',
  },
  productPrice: {
    textAlign: 'center',
    ...fonts.fw_600,
    fontSize: 16,
    height: 24,
    color: ThemeColors.darkslategray,
    marginBottom: 35,
  },
  productDetails: {
    textAlign: 'center',
    ...fonts.fw_300,
    fontSize: 12,
    height: 24,
    color: ThemeColors.darkslategray,
  },
  productName: {
    textAlign: 'center',
    ...fonts.fw_500,
    fontSize: 16,
    marginBottom: 10,
    color: ThemeColors.darkslategray,
  },
  productImage: {
    // padding: 20,
    textAlign: 'center',
    height: 120,
  },
  productTitle: {
    marginBottom: 20,
  },
  productWrapper: {
    marginRight: 10,
    marginVertical: 0,
    paddingHorizontal: 5,
    backgroundColor: ThemeColors.white,
    shadowColor: ThemeColors.darkgray,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 10,
  },
  productContainer: {
    marginVertical: 10,
  },
  carouselButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginTop: 15,
  },
  navButton: {
    backgroundColor: ThemeColors.steelblue,
    padding: 10,
    borderRadius: 5,
  },
  navButtonText: {
    color: ThemeColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  reviewerDesignation: {
    marginBottom: 10,
    ...fonts.fw_300,
    fontSize: 14,
    color: ThemeColors.white,
    textAlign: 'center',
  },
  reviewerName: {
    ...fonts.fw_600,
    fontSize: 18,
    color: ThemeColors.white,
    textAlign: 'center',
    marginTop: 20,
  },
  reviewDec: {
    ...fonts.fw_400_italic,
    fontSize: 14,
    color: ThemeColors.white,
    textAlign: 'center',
    marginVertical: 5,
  },
  reviewImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginHorizontal: 'auto',
  },
  reviewContainer: {
    marginHorizontal: 20,
  },
  reviewTitle: {
    textAlign: 'center',
    color: ThemeColors.white,
    ...fonts.fw_600,
    fontSize: 18,
    marginBottom: 20,
    paddingTop: 10,
    marginHorizontal: 20,
  },
  customerReview: {
    backgroundColor: ThemeColors.steelblue,
    marginTop: 10,
    paddingVertical: 20,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    // borderRadius: 10,
  },
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
    flex: 1,
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
    marginTop: 10,
  },
  readMoreText: {
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
  },
});
