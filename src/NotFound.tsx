import React from 'react';
import {fonts, ThemeColors} from './Constants/stylesUtiles';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import Footer from './components/footer';

const NotFound = () => {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}>
      <View style={styles.container}>
        <Text style={styles.title}>404</Text>
        <Text style={styles.text}>Ooops, Something Goes Wrong</Text>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        height:352,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        ...fonts.fw_600,
        fontSize: 45,
        color: ThemeColors.darkslategray
    },
    text: {
        ...fonts.fw_300,
        fontSize: 14,
        color: ThemeColors.darkslategray
    }
});

export default NotFound;
