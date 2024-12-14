import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fonts, ThemeColors} from './Constants/stylesUtiles';
import Product1 from './assets/images/Home/product.jpg';
import Product2 from './assets/images/Home/product4.jpg';
import Product3 from './assets/images/Home/product2.jpg';
import Product4 from './assets/images/Home/product3.jpg';
import Product5 from './assets/images/Home/product4.jpg';
import Product6 from './assets/images/Home/product5.jpg';
import Product7 from './assets/images/Home/product6.jpg';
import Footer from './components/footer';

const screenWidth = Dimensions.get('window').width;

const ProductList = () => {
  const ProductSliderItem = [
    {
      id: 1,
      image: Product1,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
      qty: '600 ml',
      tag: 'Only available 4 items'
    },
    {
      id: 2,
      image: Product2,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
      qty: '600 ml',
      tag: 'Only available 10 packs available 10 packs'
    },
    {
      id: 3,
      image: Product3,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
      tag: 'Only available 4 items'
    },
    {
      id: 4,
      image: Product4,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
      tag: 'Available'
    },
    {
      id: 5,
      image: Product5,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
      tag: 'Ready Stock'
    },
    {
      id: 6,
      image: Product6,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
      tag: 'Pre Order'
    },
    {
      id: 7,
      image: Product7,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
      tag: 'Available'
    },
    {
      id: 8,
      image: Product2,
      title: 'Tablet',
      des: '1pack - 20 pcs',
      price: 10,
      tag: 'Ready Stock'
    },
  ];
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.productContainer}>
        <Text style={[styles.healthTitle, styles.productTitle]}>
          OUR
          <Text style={styles.healthTitleHighligh}>&nbsp; PRODUCTS</Text>
        </Text>
        <View style={styles.productContainerBlock}>
          {ProductSliderItem.map(item => (
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
              <Text style={styles.productPrice}>${item.price} {item?.qty && <Text style={styles.qty}>/ {item.qty}</Text>}</Text>
              {item?.tag && <Text style={styles.producTag}>{item.tag}</Text>}
              <TouchableOpacity style={styles.buyNow}>
                <Text style={styles.buyNowText}>BUY</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productContainerBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: 30,
  },
  buyNowText: {
    ...fonts.fw_600,
    fontSize: 12,
    backgroundColor: ThemeColors.steelblue,
    color: ThemeColors.white,
    borderRadius: 30,
    margin: 'auto',
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    width: 80,
  },
  qty: {
    ...fonts.fw_400,
    fontSize: 12,
    color: ThemeColors.gray
  },
  buyNow: {
    marginBottom: 15,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    margin: 'auto',
    marginTop: 15
  },
  productPrice: {
    textAlign: 'center',
    ...fonts.fw_600,
    fontSize: 16,
    height: 24,
    color: ThemeColors.darkslategray,
    marginBottom: 2,
  },
  producTag: {
    textAlign: 'center',
    ...fonts.fw_600,
    fontSize: 10,
    height: 35,
    color: ThemeColors.red,
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
    lineHeight: 18
  },
  productImage: {
    // padding: 10,
    textAlign: 'center',
    height: 90,
    marginBottom: 10
  },
  productTitle: {
    marginBottom: 20,
  },
  productWrapper: {
    paddingHorizontal: 5,
    backgroundColor: ThemeColors.white,
    shadowColor: ThemeColors.darkgray,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: ThemeColors.gray1,
    width: screenWidth / 2 - 27.5,
  },
  productContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
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
});

export default ProductList;
