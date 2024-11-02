import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ThemeColors, fonts} from '../../Constants/stylesUtiles';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

type RootDrawerParamList = {
  Home: undefined;
  Details: undefined;
};

const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.menuIcon}>
        <TouchableOpacity onPress={openDrawer}>
          <Icon name="align-left" size={25} color={ThemeColors.steelblue} style={styles.menuDrawer} />
        </TouchableOpacity>
      </Text>
      <Text style={styles.title}>Asiapp</Text>
      <Text style={styles.search}>
        <Icon name="search" size={25} color={ThemeColors.steelblue} />
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    ...fonts.fw_400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: ThemeColors.white,
    shadowColor: ThemeColors.darkgray,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  menuIcon: {
    ...fonts.fw_900
  },
  menuDrawer:{
    ...fonts.fw_900
  },
  title:{
    color: ThemeColors.steelblue,
    fontSize: 18,
    ...fonts.fw_900
  },
  search:{
    ...fonts.fw_900
  }
});
