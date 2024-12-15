import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import AntiDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

interface wishItemType {
  id: Number;
  image: any;
  title: string;
  des: string;
  price: string;
}

interface fareDataPropsType {
  label: string;
  value: string;
}

const ShoppingCart = () => {
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
  const fareData: fareDataPropsType[] = [
    {
      label: 'Total',
      value: '$ 32.00',
    },
    {
      label: 'Discount',
      value: '- $ 5.00',
    },
    {
      label: 'Coupon Discount',
      value: 'Apply Coupon',
    },
    {
      label: 'Delivery',
      value: '$ 2.00',
    },
  ];
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.wishListContainer}>
        <Text style={[styles.healthTitle, styles.title]}>
          SHOPPING
          <Text style={styles.healthTitleHighligh}>&nbsp; CART</Text>
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
                </View>
              </View>
              <View style={styles.rightBlock}>
                <View style={styles.quantityInputBlock}>
                  <TouchableOpacity style={styles.actionWrapper}>
                    <AntiDesign name="minus" size={15} style={styles.action} />
                  </TouchableOpacity>
                  <TextInput style={styles.input} placeholder="1" value="1" />
                  <TouchableOpacity style={styles.actionWrapper}>
                    <AntiDesign name="plus" size={15} style={styles.action} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
        {/* Price fare block */}
        <View style={styles.priceFareBlock}>
          <View style={styles.summaryBlock}>
            {fareData.map(fareItem => (
              <View style={styles.fareItem}>
                <Text style={styles.fareLabel}>{fareItem.label}</Text>
                <Text style={styles.fareValue}>{fareItem.value}</Text>
              </View>
            ))}
            <View style={[styles.totalItem, styles.fareItem]}>
              <Text style={[styles.fareLabel,{fontSize: 16, fontWeight: 800}]}>Total payable</Text>
              <Text style={[styles.fareValue,{fontSize: 16, fontWeight: 800}]}>$ 29.00</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.checkoutBtnWrapper}>
            <Text style={styles.checkoutBtn}>
              CHECKOUT{' '}
              <Entypo
                name="arrow-with-circle-right"
                size={16}
                style={styles.checkoutBtnIcon}
              />
            </Text>
          </TouchableOpacity>
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
    marginBottom: 50,
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
    borderBottomColor: ThemeColors.gray1,
    paddingTop: 7,
    paddingBottom: 12,
    paddingHorizontal: 10,
  },
  closeWrapper: {
    paddingTop: 8,
  },
  close: {
    color: ThemeColors.steelblue,
  },
  leftBlock: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'center',
  },
  info: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  imageBlock: {},
  wTile: {
    ...fonts.fw_600,
    fontSize: 14,
    color: ThemeColors.darkslategray,
    lineHeight: 21,
  },
  wPrice: {
    ...fonts.fw_300,
    fontSize: 14,
    color: ThemeColors.steelblue,
    lineHeight: 21,
  },
  rightBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 2,
  },
  quantityInputBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionWrapper: {
    width: 25,
    height: 25,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: ThemeColors.steelblue,
  },
  action: {},
  input: {
    width: 48,
    textAlign: 'center',
    color: ThemeColors.steelblue,
    fontSize: 14,
    paddingHorizontal: 5,
    padding: 0,
  },
  priceFareBlock: {},
  summaryBlock: {
    backgroundColor: ThemeColors.steelblue,
    marginVertical: 20,
    padding: 15,
    borderRadius: 8,
    gap: 5,
  },
  checkoutBtnWrapper: {
    backgroundColor: ThemeColors.steelblue,
    height: 36,
    borderRadius: 90,
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    margin: 'auto',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  checkoutBtn: {
    color: ThemeColors.white,
    fontSize: 14,
    ...fonts.fw_600,
    textAlignVertical: 'center',
    lineHeight: 20,
  },
  checkoutBtnIcon: {},
  fareItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
  fareLabel: {
    ...fonts.fw_300,
    color: ThemeColors.white,
    fontSize: 14,
  },
  fareValue: {
    ...fonts.fw_300,
    color: ThemeColors.white,
    fontSize: 14,
  },
  totalItem: {
    marginVertical: 10,
    paddingTop: 15,
    borderTopWidth: 1,
    borderColor: ThemeColors.white
  }
});

export default ShoppingCart;
