import { View, Text, FlatList, Button, Pressable, Image } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import ProductList from '../components/product/ProductList';
import { Trash, ArrowUp2, Minus, Add } from 'iconsax-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, incrementQuantity, decrementQuantity } from '../features/cart/cartSlice';
import colors from '../colors/colors';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation()

  const handleContinuePayment = () => {
    navigation.navigate('Asistan'); // Asistan sayfasına yönlendirme
  };
  const getCartTotal = () => {
    let total = 0;
    if (cart.length > 0) {
      total = cart.reduce((acc, item) => acc + (item.quantity * item.fiyat), 0)
    }
    return total
  }
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Sepetiniz</Text>
        <Pressable onPress={() => dispatch(clearCart())}>
          <Trash size="20" color="#fd9220" />
        </Pressable>
      </View>
      {cart.length > 0 ? (
        <FlatList
          keyExtractor={(item, index) => item.id.toString()}
          data={cart}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.cartContainer}>
              <View style={styles.imageContainer}>
                <Image alt='image' source={{ uri: item.foto }} style={styles.productImage} />
              </View>
              <View >
                <Text style={styles.productBrand}>{item.marka}</Text>
                <Text style={styles.productName}>{item.kategori}</Text>
                <Text style={styles.productPrice}>
                  <Text>{'\u20BA'}</Text>
                  {item.fiyat}
                </Text>
                <Text style={styles.priceDisc}>
                  <Text>{'\u20BA'}</Text>
                  {item.indirimli_fiyat}
                </Text>
              </View>
              <View style={styles.quantity}>
                <TouchableOpacity onPress={() => dispatch(decrementQuantity(item.id))}>
                  <Minus
                    size="20"
                    color="#fd9220"
                  />
                </TouchableOpacity>
                <Text>
                  {item.quantity}
                </Text>
                <TouchableOpacity onPress={() => dispatch(incrementQuantity(item.id))}>
                  <Add
                    size="20"
                    color="#fd9220"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      ) : (<View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Henüz sepetinize ürün eklemediniz.</Text>
      </View>)}
      <ProductList title={'Sana özel'} />
      <View style={styles.cartContainer}>
        <View flexDirection="column">
          <Text color="gray.700">Sepetin</Text>
          <Text color="orange.400" bold>
            {'\u20BA'} {`${getCartTotal()}`} <ArrowUp2 size="20" color="#fd9220" />{' '}
          </Text>
        </View>
        <Button onPress={handleContinuePayment} style={styles.button}>
          <Text color="white">Ödemeye Devam Et</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    marginTop: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  emptyCartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flex: 1,
  },
  emptyCartText: {
    fontSize: 18,
    color: 'gray',
  },
  imageContainer: {

    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
    margin: 7
  },

  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },

  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemContainer: {},
  cartItemPrice: {
    fontSize: 16,
    color: 'green',
  },
  productPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through', // İndirimli fiyatın üzerine çizgi

    color: colors.text,

  },
  priceDisc: {
    fontSize: 14,
    color: colors.orange,
    fontWeight: 'bold',
  },
  quantity: {
    flexDirection: 'row', marginLeft: 20, alignItems: 'center'
  },
  productBrand: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.01,
    color: colors.text_dark,
  },
  button: {
    backgroundColor: colors.orange,
    rounded: "20",
    width: "65%",
    borderRadius: 20,
  }

});

export default CartScreen;
