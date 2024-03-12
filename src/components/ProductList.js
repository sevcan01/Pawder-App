import { Image, View, Text, FlatList, Pressable } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Add } from 'iconsax-react-native';
import colors from '../colors/colors';
import Related from '../components/Related';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
// Ekran boyutunu al
const { width, height } = Dimensions.get('window');

// Ürün listesi bileşeni
const ProductList = ({ title }) => {
  const dispatch = useDispatch();

  // Redux store'dan ürünleri al
  const products = useSelector(state => state.product.products);
  // Her bir ürün öğesini render etmek için fonksiyon
  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      {/* Ürün resmi */}
      <View style={styles.imageContainer}>
        <Image alt='image' source={{ uri: item.foto }} style={styles.productImage} />
      </View>

      {/* Ürün bilgileri */}

      <View style={styles.productInfo}>
        {/* Fiyat bilgileri */}
        <View style={styles.priceContainer}>
          <View style={styles.priceItem}>
            <Text style={styles.productPrice}>
              <Text>{'\u20BA'}</Text>
              {item.fiyat}
            </Text>
          </View>
          <View style={styles.priceItem}>
            <Text style={styles.priceDisc}>
              <Text>{'\u20BA'}</Text>
              {item.indirimli_fiyat}
            </Text>
          </View>
        </View>
        <Text style={styles.productBrand}>{item.marka}</Text>
        <Text style={styles.productCategory}>{item.kategori}</Text>
        <Text style={styles.productAmount}>{item.miktar}</Text>
        <TouchableOpacity onPress={() => {
          dispatch(addToCart(item));
        }} style={styles.addButton}>
          <Add size="25" color="#fff" />
        </TouchableOpacity>
        <Related />
      </View>
    </View>
  );


  return (
    <View>
      <Text style={styles.text}>Popüler</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductItem}
        horizontal={true}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default ProductList;

const styles = StyleSheet.create({
  container: {
    padding: 5,

  },
  productContainer: {
    flexDirection: 'column',
    marginBottom: 20,

    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    marginHorizontal: width * 0.04,
    height: height * 0.28,
    maxWidth: 150,
    padding: 5
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    padding: 10
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    padding: 5,
    alignItems: 'end',
    letterSpacing: 0.01,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  priceItem: {
    marginRight: 10, // Fiyatlar arasındaki boşluk
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
  productBrand: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.01,
    color: colors.text_dark,
  },
  productCategory: {
    fontSize: 16,

    color: colors.text_dark,
  },


  productAmount: {
    fontSize: 14,
    marginTop: 5,
    letterSpacing: 0.01,
    color: '#666',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 3.8,
    shadowOpacity: 0.5,
    width: 30,
    height: 30,
    backgroundColor: '#fd9220',
    position: 'absolute',
    right: 3,
    top: -110,
    borderRadius: 15,

  },
  text: {
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
    marginLeft: 15
  }
});
