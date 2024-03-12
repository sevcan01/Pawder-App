import { Image, View, Text, FlatList, } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Add, TickCircle } from 'iconsax-react-native';
import Related from '../related/Related';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import productStyles from './productStyle';


// Ürün listesi bileşeni
const ProductList = ({ title }) => {
  const dispatch = useDispatch();
  const [addedProduct, setAddedProduct] = useState(null)

  const products = useSelector(state => state.product.products);


  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setAddedProduct(item.id);
    setTimeout(() => {
      setAddedProduct(null);
    }, 500);
  };
  // Her bir ürün öğesini render etmek için fonksiyon
  const renderProductItem = ({ item }) => (
    <View style={productStyles.productContainer}>
      {/* Ürün resmi */}
      <View style={productStyles.imageContainer}>
        <Image alt='image' source={{ uri: item.foto }} style={productStyles.productImage} />
      </View>

      {/* Ürün bilgileri */}

      <View style={productStyles.productInfo}>
        {/* Fiyat bilgileri */}
        <View style={productStyles.priceContainer}>
          <View style={productStyles.priceItem}>
            <Text style={productStyles.productPrice}>
              <Text>{'\u20BA'}</Text>
              {item.fiyat}
            </Text>
          </View>
          <View style={productStyles.priceItem}>
            <Text style={productStyles.priceDisc}>
              <Text>{'\u20BA'}</Text>
              {item.indirimli_fiyat}
            </Text>
          </View>
        </View>
        <Text style={productStyles.productBrand}>{item.marka}</Text>
        <Text style={productStyles.productCategory}>{item.kategori}</Text>
        <Text style={productStyles.productAmount}>{item.miktar}</Text>
        <TouchableOpacity onPress={() => handleAddToCart(item)} style={productStyles.addButton}>
          {/* butona basildiginda icon degis  */}
          {addedProduct === item.id ? (
            <TickCircle size="32" color="#fff" />
          ) : (
            <Add size="25" color="#fff" />
          )}
        </TouchableOpacity>
        <Related />
      </View>
    </View>
  );


  return (
    <View>
      <Text style={productStyles.text}>Popüler</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductItem}
        horizontal={true}
        contentContainerStyle={productStyles.container}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};




export default ProductList;
