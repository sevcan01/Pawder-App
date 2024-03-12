import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Asistan from '../screens/Asistan';
import { HomeHashtag, Category2, Headphone, ShoppingCart } from 'iconsax-react-native';

import CategoriesScreen from '../screens/Categories';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);



  const getCartTotal = () => {
    let total = 0;
    if (cart.length > 0) {
      total = cart.reduce((acc, item) => acc + (item.quantity * item.fiyat), 0)
    }
    return total
  }




  return (
    <Tab.Navigator
      initialRouteName="Ana sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#FD9220",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 100,
          paddingHorizontal: 40,
          paddingVertical: 5


        },
      }}
    >
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <HomeHashtag
            size="32"
            tabBarActiveTintColor="#FD9220"
            color={color}
            variant="TwoTone"

          />
        ),
      }} name="Ana Sayfa" component={HomeScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Category2
              size="32"
              color={color}
              variant="TwoTone"

            />
          ),
        }}
        name="Kategoriler" component={CategoriesScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, item }) => (
            <View>
              <ShoppingCart
                size="32"
                color={color}
                variant="TwoTone"
              />

            </View>
          ),

          tabBarLabel: ({ color, item }) => (
            <View>
              <Text style={{ color, fontSize: 10 }}>
                {getCartTotal()} {'\u20BA'}
              </Text>
            </View>
          ),
        }}
        name={'Cart'} component={CartScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Headphone
              size="32"
              color={color}
              variant="TwoTone"
            />
          ),
        }}
        name="Asistan" component={Asistan} />
    </Tab.Navigator>
  )
}

export default MyTabs;


const styles = StyleSheet.create({
  total: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }

})