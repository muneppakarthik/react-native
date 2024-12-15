import React, {useState} from 'react';
import {fonts, ThemeColors} from './Constants/stylesUtiles';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Footer from './components/footer';
import Product1 from './assets/images/Home/product.jpg';

import AntiDesign from 'react-native-vector-icons/AntDesign';

const ProductDetail = () => {
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.productContainer}>
        <View style={styles.imageBlock}>
          <Image source={Product1} style={styles.image} />
          <TouchableOpacity
            style={[
              styles.wishlistIconWrapper,
              {
                backgroundColor: isWishlisted
                  ? ThemeColors.steelblue
                  : ThemeColors.white,
              },
            ]}
            onPressIn={() => setIsWishlisted(true)}
            onPressOut={() => setIsWishlisted(false)}
            activeOpacity={1}>
            <AntiDesign
              name="hearto"
              size={20}
              style={[
                styles.wishlistIcon,
                {
                  color: isWishlisted
                    ? ThemeColors.white
                    : ThemeColors.steelblue,
                },
              ]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <View style={styles.titlePrice}>
            <Text style={styles.title}>Medicine</Text>
            <Text style={styles.price}>$4.00</Text>
          </View>
          <Text style={styles.description}>
            You can use this page as product page, with some product image in
            carousel. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </Text>
        </View>
      </View>
      {/* Quantity Block */}
      <View style={styles.quantityBlock}>
        <Text style={styles.qty}>Qty</Text>
        <View style={styles.quantityInputBlock}>
          <TouchableOpacity style={styles.actionWrapper}>
            <AntiDesign name="minus" size={20} style={styles.action} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="1"
          />
          <TouchableOpacity style={styles.actionWrapper}>
            <AntiDesign name="plus" size={20} style={styles.action} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buynowWrapper}>
          <Text style={styles.buynowLabel}>BUY</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    paddingHorizontal: 20,
  },
  imageBlock: {
    padding: 20,
    position: 'relative',
  },
  image: {
    resizeMode: 'cover',
    height: 200,
    width: '100%',
  },
  wishlistIconWrapper: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    width: 44,
    height: 44,
    shadowColor: ThemeColors.gray,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 1,
    shadowRadius: 50,
    elevation: 7,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  wishlistIcon: {
    // color: ThemeColors.steelblue,
  },
  info: {
    paddingTop: 15,
    paddingBottom: 50,
  },
  titlePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    ...fonts.fw_300,
    fontSize: 20,
    lineHeight: 30,
    color: ThemeColors.steelblue,
  },
  price: {
    ...fonts.fw_600,
    fontSize: 20,
    lineHeight: 30,
    color: ThemeColors.gray,
  },
  description: {
    // marginBottom: 50,
    color: ThemeColors.darkslategray,
    fontSize: 14,
    ...fonts.fw_300,
    lineHeight: 22,
  },
  quantityBlock: {
    backgroundColor: ThemeColors.lightGray2,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 25,
  },
  qty: {
    ...fonts.fw_300,
    fontSize: 14,
    color: ThemeColors.steelblue,
  },
  buynowWrapper: {
    backgroundColor: ThemeColors.steelblue,
    borderRadius: 20,
    height: 42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  buynowLabel: {
    ...fonts.fw_600,
    fontSize: 16,
    color: ThemeColors.white,
    verticalAlign: 'middle',
  },
  quantityInputBlock: {
    height: 42,
    borderWidth: 1,
    borderColor: ThemeColors.darkgray,
    flexDirection: 'row',
    flexGrow: 1
  },
  actionWrapper: {
    width: 37,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {},
  input: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: ThemeColors.darkgray,
    flexGrow: 1,
    textAlign: 'center'
  }
});

export default ProductDetail;
