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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Footer from './components/footer';

interface wishItemType {
  id: Number;
  image: any;
  title: string;
  des: string;
  price: string;
}

const WishList = () => {
  const wishListData: wishItemType[] = [
    {
      id: 1,
      image: Product1,
      title: 'Herbal Drinks',
      des: 'Health drinks',
      price: '10.00',
    },
    {
      id: 2,
      image: Product2,
      title: 'Vitamin',
      des: '1pack 20pcs',
      price: '8.00',
    },
    {
      id: 3,
      image: Product3,
      title: 'Suplemen',
      des: 'Lorem ipsum',
      price: '5.00',
    },
    {
      id: 4,
      image: Product4,
      title: 'Tablet',
      des: '1pack - 25 pcs',
      price: '7.00',
    },
    {
      id: 5,
      image: Product4,
      title: 'Tablet 2',
      des: '1pack - 20pcs',
      price: '7.00',
    },
  ];
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.wishListContainer}>
        <Text style={[styles.healthTitle, styles.title]}>
          WISH
          <Text style={styles.healthTitleHighligh}>&nbsp; LIST</Text>
        </Text>
        <View style={styles.wishlistWrapper}>
          {wishListData.map(item => (
            <View style={styles.itemContainer}>
              <View style={styles.leftBlock}>
                <View style={styles.imageBlock}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.info}>
                  <Text style={styles.wTile}>{item.title}</Text>
                  <Text style={styles.wPrice}>$ {item.price}</Text>
                  <Text style={styles.wDes}>{item.des}</Text>
                </View>
              </View>
              <View style={styles.rightBlock}>
                <TouchableOpacity style={styles.closeWrapper}>
                  <AntDesign
                    name="closecircle"
                    size={25}
                    style={styles.close}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wishListContainer: {
    paddingHorizontal: 20,
    marginVertical: 30,
    marginBottom: 50
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  healthTitle: {
    ...fonts.fw_600,
    fontSize: 18,
    color: ThemeColors.darkgray,
    textAlign: 'center',
    paddingTop: 10,
  },
  healthTitleHighligh: {
    color: ThemeColors.steelblue,
  },
  wishlistWrapper: {},
  itemContainer: {
    backgroundColor: ThemeColors.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: ThemeColors.gray,
    paddingTop: 7,
    paddingBottom: 12,
    paddingHorizontal: 10,
  },
  closeWrapper: {
    paddingTop: 8
  },
  close: {
    color: ThemeColors.steelblue,
  },
  leftBlock: {
    flexDirection: 'row',
  },
  rightBlock: {},
  image: {
    width: 70,
    height: 70,
    resizeMode: 'center',
  },
  info: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  imageBlock: {},
  wTile: {
    ...fonts.fw_600,
    fontSize: 14,
    color: ThemeColors.darkslategray,
    lineHeight: 21
  },
  wPrice: {
    ...fonts.fw_300,
    fontSize: 14,
    color: ThemeColors.steelblue,
    lineHeight: 21
  },
  wDes: {
    ...fonts.fw_300,
    fontSize: 12,
    color: ThemeColors.darkslategray,
    lineHeight: 14.5
  }
});

export default WishList;
