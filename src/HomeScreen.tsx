import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go To Notifications"
      />
    </View>
  );
};

export default HomeScreen;
