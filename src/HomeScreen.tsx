import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {fonts} from './Constants/stylesUtiles';
import Doctor from './assets/images/Home/doctor.png';
const CareImage = require("./assets/images/care.png");

const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Text style={{...fonts.fw_100, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_200, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_300, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_400, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_500, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_600, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_700, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Text style={{...fonts.fw_800, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Image
        source={Doctor}
        style={{width: 200,height:200}}
      />
      <Text style={{...fonts.fw_900, fontSize: 23}}>
        Home Screen <Icon name="plane" size={30} color="blue" />;
      </Text>
      <Image
        source={CareImage}
        style={{width: 200,height:200}}
      />
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go To Notifications"
      />
    </View>
  );
};

export default HomeScreen;
