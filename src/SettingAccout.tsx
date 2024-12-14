import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import {fonts, ThemeColors} from './Constants/stylesUtiles';

import Image1 from './assets/images/Home/profile5.jpg';
import Footer from './components/footer';
import Input from './components/Input';
import {launchImageLibrary} from 'react-native-image-picker';

const SettingAccout = () => {
  const [image, setImage] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.error('Image Picker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const selectedImage = response.assets[0];
          if (selectedImage.uri) {
            setImage(selectedImage.uri);
          } else {
            setImage(null);
          }
        }
      },
    );
  };

  const handleRefresh = () => {
    setRefreshing(true);

    // Simulate a refresh action
    setTimeout(() => {
      setImage(null); // Clear the uploaded image
      setRefreshing(false);
    }, 1000); // Simulate a short refresh delay
  };
  return (
    <ScrollView
      // nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: ThemeColors.white}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      <View style={styles.container}>
        <Text style={styles.title}>
          <Text style={styles.titleHighLight}>Setting &nbsp;</Text>
          Account
        </Text>
        {image ? (
          <Image source={{uri: image}} style={styles.image} />
        ) : (
          <Image source={Image1} style={styles.image} />
        )}
        <Text style={styles.imageInfo}>Photo (130 * 130)</Text>

        <TouchableOpacity onPress={selectImage}>
          <View style={styles.uploadContainer}>
            <Text style={styles.uploadButton}>File</Text>
            <Text style={styles.uploadLabel}>Upload One More Files</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <Input placeHolder="Jane" label="First Name" showLabel={true} />
          <Input placeHolder="Doe" label="Last Name" showLabel={true} />
          <Input placeHolder="email@email.com" label="Email" showLabel={true} />
          <Input placeHolder="+918655358954" label="Phone" showLabel={true} />
          <Input
            placeHolder="Wijilan St, Yogyakarta, Indonesia"
            label="Address"
            showLabel={true}
          />
          <TouchableOpacity style={styles.formButtonWrapper}>
            <Text style={styles.formButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default SettingAccout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  title: {
    ...fonts.fw_600,
    fontSize: 18,
    color: ThemeColors.steelblue,
    textAlign: 'center',
    paddingTop: 10,
    marginBottom: 40,
    textTransform: 'uppercase',
  },
  titleHighLight: {
    color: ThemeColors.darkgray,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 4,
    resizeMode: 'contain',
  },
  imageInfo: {
    marginTop: 1,
    marginBottom: 10,
    fontSize: 12,
    ...fonts.fw_300,
    color: ThemeColors.darkgray,
  },
  formContainer: {
    marginTop: 20,
  },
  formButtonWrapper: {
    backgroundColor: ThemeColors.steelblue,
    marginTop: 30,
    paddingHorizontal: 22,
    paddingTop: 5,
    paddingBottom: 2,
    borderRadius: 4,
    width: 120,
    margin: 'auto',
    marginBottom: 10,
  },
  formButton: {
    textAlign: 'center',
    color: ThemeColors.white,
    ...fonts.fw_300,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  uploadContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  uploadButton: {
    display: 'flex',
    fontSize: 16,
    ...fonts.fw_300,
    letterSpacing: 0.5,
    backgroundColor: ThemeColors.steelblue,
    color: ThemeColors.white,
    lineHeight: 19.2,
    paddingHorizontal: 20,
    paddingTop: 5,
    borderRadius: 4,
  },
  uploadLabel: {
    display: 'flex',
    color: ThemeColors.darkgray,
    borderBottomColor: ThemeColors.darkslategray,
    borderBottomWidth: 1,
  },
  uploadImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
    borderRadius: 8,
  },
});
