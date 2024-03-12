import React from 'react';
import { FlatList, Image, Text, View } from 'native-base';
import { Dimensions, StyleSheet } from 'react-native';

const Carousel = () => {
  const screenWidth = Dimensions.get('window').width;

  const carouselData = [
    {
      id: '01',
      image: require('../../assets/Carousel1.png'),
    },
    {
      id: '02',
      image: require('../../assets/Carousel1.png'),
    },
    {
      id: '03',
      image: require('../../assets/Carousel1.png'),
    },
  ];
  // Display Images
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <Image
          source={item.image}
          style={styles.image}
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
        style={styles.list}
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

const styles = StyleSheet.create({
  image: { height: 200, width: 400, borderRadius: 20 },
  list: {
    marginBottom: 30,
  }
});
