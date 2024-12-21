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

// context
import {AppProvider} from './src/Context/AppContext';
import ContextScreen from './src/ContextScreen';
import ContactUs from './src/ContactUs';
import OurDoctors from './src/OurDoctors';
import Gallery from './src/Gallery';
import SettingAccout from './src/SettingAccout';
import DrawerCustom from './src/components/Drawer';
import NewsList from './src/NewsList';
import NewsDetails from './src/NewsDetails';
import ProductList from './src/ProductList';
import WishList from './src/WishList';
import ProductDetail from './src/ProductDetail';
import ShoppingCart from './src/ShoppingCart';
import Checkout from './src/Checkout';
import NotFound from './src/NotFound';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';

const Drawer = createDrawerNavigator();
function App(): React.JSX.Element {
  return (
    <AppProvider>
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
              header: ({navigation, route}) => <Header />,
            }}
            drawerContent={props => <DrawerCustom {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen
              name="Notifications"
              component={NotificationsScreen}
            />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="ContextScreen" component={ContextScreen} />
            <Drawer.Screen name="ContactUs" component={ContactUs} />
            <Drawer.Screen name="Our Doctors" component={OurDoctors} />
            <Drawer.Screen name="Gallery" component={Gallery} />
            <Drawer.Screen name="Setting" component={SettingAccout} />
            <Drawer.Screen name="NewsList" component={NewsList} />
            <Drawer.Screen name="NewsDetail" component={NewsDetails} />
            <Drawer.Screen name="productLink" component={ProductList} />
            <Drawer.Screen name="wishlist" component={WishList} />
            <Drawer.Screen name="productDetails" component={ProductDetail} />
            <Drawer.Screen name="shoppingCart" component={ShoppingCart} />
            <Drawer.Screen name="checkout" component={Checkout} />
            <Drawer.Screen name="notFound" component={NotFound} />
            <Drawer.Screen name="login" component={SignIn} />
            <Drawer.Screen name="signup" component={SignUp} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: ThemeColors.white,
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
