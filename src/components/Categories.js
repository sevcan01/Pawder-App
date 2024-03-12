import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { View, Text, FlatList, Image } from 'native-base'
import { useSelector } from 'react-redux'

const Categories = ({ title }) => {

  const categories = useSelector(state => state.category.categories)
  const renderItem = ({ item }) => {
    return (
      <View
        style={styles.imageContainer}>
        <Image
          alt='image'
          source={item.photo}
          style={styles.productImage}
        />
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.text} >{title}</Text>
      <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5
  },
  productImage: {

    width: 80,
    height: 80,

  },
  text: {
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
    marginLeft: 15
  }
})