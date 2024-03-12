import { TouchableOpacity } from 'react-native'
import React from 'react'
import { View, Text, FlatList, Image } from 'native-base'
import { useSelector } from 'react-redux'
import CategoriesStyle from './categoriesStyle'

const Categories = ({ title }) => {

  const categories = useSelector(state => state.category.categories)
  const renderItem = ({ item }) => {
    return (
      <View
        style={CategoriesStyle.imageContainer}>
        <Image
          alt='image'
          source={item.photo}
          style={CategoriesStyle.productImage}
        />
      </View>
    );
  };
  return (
    <View>
      <Text style={CategoriesStyle.text} >{title}</Text>
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

