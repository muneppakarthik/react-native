import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {fonts, ThemeColors} from '../Constants/stylesUtiles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DrawerCustom = (props: any) => {
  const handleNavigation = (screen: string) => {
    props.navigation.navigate(screen);
  };
  const [showShoppingList, setShoShoppingList] = useState(false);

  const shoppingPagesList = [
    {
      name: 'Product List',
      link: 'productLink',
    },
    {
      name: 'Wish List',
      link: 'wishlist',
    }
  ];
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleNavigation('Home')}>
        <Icon name="home" size={20} style={styles.icon} />
        <Text style={styles.drawerLabel}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleNavigation('Our Doctors')}>
        <Icon1 name="user-doctor" size={20} style={styles.icon} />
        <Text style={styles.drawerLabel}>Our Doctors</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.drawerItem,
          {display: 'flex', justifyContent: 'space-between'},
        ]}
        onPress={() => setShoShoppingList(prev => !prev)}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
          }}>
          <FontAwesome5 name="shopping-bag" size={20} style={styles.icon} />
          <Text style={styles.drawerLabel}>Shop</Text>
        </View>
        <AntDesign name={showShoppingList?'up':'down'} size={20} style={styles.icon} />
      </TouchableOpacity>
      {/* Shopping Page List start */}
      {showShoppingList && (
        <View style={styles.shoppingListComtainer}>
          {shoppingPagesList.map(item => (
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => handleNavigation(item.link)}>
              <AntDesign name="right" size={20} style={styles.icon} />
              <Text style={styles.drawerLabel}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {/* Shopping Page List end*/}
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleNavigation('NewsList')}>
        <Icon name="newspaper-o" size={20} style={styles.icon} />
        <Text style={styles.drawerLabel}>News List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleNavigation('NewsDetail')}>
        <Icon name="newspaper-o" size={20} style={styles.icon} />
        <Text style={styles.drawerLabel}>News Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleNavigation('Gallery')}>
        <Icon name="image" size={20} style={styles.icon} />
        <Text style={styles.drawerLabel}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleNavigation('Setting')}>
        <Fontisto name="player-settings" size={20} style={styles.icon} />
        <Text style={styles.drawerLabel}>Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleNavigation('ContactUs')}>
        <AntDesign name="contacts" size={20} style={styles.icon} />
        <Text style={styles.drawerLabel}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <AntDesign name="logout" size={20} style={styles.icon} />
        <Text style={styles.drawerLabel}>Sign Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default DrawerCustom;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: ThemeColors.steelblue,
  },
  drawerItem: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: ThemeColors.steelBlueContrast,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  drawerLabel: {
    ...fonts.fw_300,
    fontSize: 14,
    color: ThemeColors.white,
  },
  icon: {
    color: ThemeColors.white,
  },
  shoppingListComtainer: {},
});
