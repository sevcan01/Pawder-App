import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';


import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { View, Text, FlatList, Image } from 'native-base';
const CategoriesScreen = () => {


  const categories = useSelector((state) => state.category.categories)

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={categories}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()} // id'yi string'e çeviriyoruz
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              alt='image'
              source={item.photo}
              style={styles.productImage}
            />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    alignItems: 'center',

  },
  imageContainer: {
    marginVertical: 10, // Dikey boşluk
    padding: 30,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10

  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 100,
    marginRight: 10,
  },
  title: {

    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CategoriesScreen;
