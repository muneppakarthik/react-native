/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  // Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import NotificationsScreen from './src/NotificationsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from './src/About';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ThemeColors} from './src/Constants/stylesUtiles';
import Header from './src/components/header/Header';
const Drawer = createDrawerNavigator();
function App(): React.JSX.Element {

  return (
    <View style={styles.app}>
    <NavigationContainer>
      {/* Stack Navigation */}
      {/* <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator> */}
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          header:({navigation,route})=>(
            <Header />
          )
        }}
        >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
      
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  app:{
    flex: 1,
    backgroundColor: ThemeColors.white 
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
