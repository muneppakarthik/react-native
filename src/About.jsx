import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AboutScreen = ({navigation}) => {
  return (
    <View>
      <Text>About Screen <Icon name="align-center" size={30} color="black" />;</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go To Notifications"
      />
    </View>
  );
};

export default AboutScreen;
