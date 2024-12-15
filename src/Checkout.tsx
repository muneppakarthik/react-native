import React, {ReactNode} from 'react';
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
import Input from './components/Input';

interface fareDataPropsType {
  label: string;
  value: string;
}
const screenWidth = Dimensions.get('window').width;
const Checkout = () => {
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
  const paymentMethods = [
    {
      label: 'Credit Card',
    },
    {
      label: 'Paypal',
    },
    {
      label: 'Direct Bank Transfer',
    },
    {
      label: 'Check Payment',
    },
  ];
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.wishListContainer}>
        <Text style={[styles.healthTitle, styles.title]}>
          <Text style={styles.healthTitleHighligh}>CHECKOUT</Text>
        </Text>
        {/* Price fare block */}
        <View style={styles.checkOutContainer}>
          {/* fare summary */}
          <View style={styles.summaryBlock}>
            {fareData.map(fareItem => (
              <View style={styles.fareItem}>
                <Text style={styles.fareLabel}>{fareItem.label}</Text>
                <Text style={styles.fareValue}>{fareItem.value}</Text>
              </View>
            ))}
            <View style={[styles.totalItem, styles.fareItem]}>
              <Text style={[styles.fareLabel, {fontSize: 16, fontWeight: 800}]}>
                Total payable
              </Text>
              <Text style={[styles.fareValue, {fontSize: 16, fontWeight: 800}]}>
                $ 29.00
              </Text>
            </View>
          </View>
          {/* fare summary */}

          {/* payment method */}
          <BoxCard
            icon="creditcard"
            title="Payment method"
            decription="Choose your payment method :">
            <View style={{gap: 7}}>
              {paymentMethods.map(paymentItem => (
                <RadioButton label={paymentItem.label} />
              ))}
            </View>
          </BoxCard>
          {/* payment method */}

          {/* Billing Detail */}
          <BoxCard
            icon="book"
            title="Billing Detail"
            decription="Fill in the form your billing detail :">
            <View style={{gap: 7}}>
              <Input placeHolder="First Name" label="First Name" />
              <Input placeHolder="Last Name" label="Last Name" />
              <Input placeHolder="Email" label="Email" />
              <Input placeHolder="Phone" label="Phone" />
              <Input placeHolder="Address" label="Address" />
            </View>
          </BoxCard>
          {/* Billing Detail */}

          {/* Shipping Information */}
          <BoxCard
            icon="book"
            title="Shipping Information"
            decription="New shipping address :">
            <View style={{gap: 7}}>
              <Input placeHolder="First Name" label="First Name" />
              <Input placeHolder="Last Name" label="Last Name" />
              <Input placeHolder="Phone" label="Phone" />
              <Input placeHolder="State/Country" label="State/Country" />
              <View style={{flexDirection: 'row', gap: 20}}>
                <Input
                  placeHolder="Town/City"
                  label="Town/City"
                  cotainerstyle={{width: screenWidth / 2 - 50}}
                />
                <Input
                  placeHolder="Zipcode"
                  label="Zipcode"
                  cotainerstyle={{width: screenWidth / 2 - 50}}
                />
              </View>
              <Input placeHolder="Address" label="Address" />
            </View>
          </BoxCard>
          {/* Shipping Information */}
          
          <Checkbox />

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
  checkOutContainer: {
    gap: 40,
  },
  summaryBlock: {
    backgroundColor: ThemeColors.steelblue,
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
    borderColor: ThemeColors.white,
  },
  boxCard: {
    borderWidth: 1,
    borderColor: ThemeColors.gray,
    borderRadius: 6,
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: ThemeColors.lightGray2,
  },
  cardTileBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  cardTile: {
    ...fonts.fw_600,
    fontSize: 14,
    color: ThemeColors.darkslategray,
  },
  cardTileIcon: {
    color: ThemeColors.steelblue,
  },
  cardDecription: {
    ...fonts.fw_300,
    fontSize: 14,
    color: ThemeColors.darkslategray,
    marginBottom: 10,
  },
  // radio
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: ThemeColors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#007BFF',
  },
  radioText: {
    ...fonts.fw_300,
    fontSize: 14,
    color: ThemeColors.darkgray,
  },
  // checkbox
  checkboxContainer: {
    marginRight: 10,
  },
  checkbox: {
    // borderWidth: 2,
    // borderColor: '#007BFF',
    // borderRadius: 4,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'white',
    flexDirection: 'row',
    gap: 10,
  },
  checkedCheckbox: {},
  checkboxInput: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: ThemeColors.steelblue,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    backgroundColor: ThemeColors.steelblue,
  },
  checkboxLabel: {
    ...fonts.fw_300,
    fontSize: 14,
    color: ThemeColors.gray,
  },
});

export default Checkout;

interface CardBoxPropType {
  title: string;
  icon: string;
  decription?: string;
  children: ReactNode;
}

const BoxCard = ({title, icon, decription, children}: CardBoxPropType) => {
  return (
    <View style={styles.boxCard}>
      <View style={styles.cardTileBlock}>
        <AntDesign name={icon} size={18} style={styles.cardTileIcon} />
        <Text style={styles.cardTile}>{title}</Text>
      </View>
      <Text style={styles.cardDecription}>{decription}</Text>
      {children}
    </View>
  );
};

const RadioButton = ({label}: any) => {
  return (
    <TouchableOpacity style={styles.radioContainer}>
      <View style={styles.radioCircle}></View>
      <Text style={styles.radioText}>{label}</Text>
    </TouchableOpacity>
  );
};

const Checkbox = () => {
  return (
    <TouchableOpacity style={styles.checkboxContainer}>
      <View style={[styles.checkbox, styles.checkedCheckbox]}>
        <View style={styles.checkboxInput}>
          <AntDesign name="check" size={18} color="white" />
        </View>
        <Text style={styles.checkboxLabel}>
          I agree that i have read and accepted the terms & conditions.
        </Text>
      </View>
    </TouchableOpacity>
  );
};
