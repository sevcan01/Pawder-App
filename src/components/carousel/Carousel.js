import React from 'react';
import { FlatList, Image, Text, View } from 'native-base';
import { Dimensions, StyleSheet } from 'react-native';
import carouselStyle from './carouselStyle';

const Carousel = () => {
  const screenWidth = Dimensions.get('window').width;

  const carouselData = [
    {
      id: '01',
      image: require('../../../assets/Carousel1.png'),
    },
    {
      id: '02',
      image: require('../../../assets/Carousel1.png'),
    },
    {
      id: '03',
      image: require('../../../assets/Carousel1.png'),
    },
  ];
  // Display Images
  const renderItem = ({ item, index }) => {
    return (
      <View style={carouselStyle.container}>
        <Image
          source={item.image}
          style={carouselStyle.image}
          alt='image'
        />
      </View>
    );
  };
  // Handle Scroll
  const handleScroll = e => {
    e.nativeEvent.contentOffset.x;

  };


  return (
    <View>
      <FlatList
        style={carouselStyle.list}
        keyExtractor={(item) => item.id}
        data={carouselData}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}

      />

    </View>
  );
};

export default Carousel;


