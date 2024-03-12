import { Text, View } from 'native-base';
import React from 'react';
import { Star1 } from 'iconsax-react-native';
import colors from '../../colors/colors';
import { StyleSheet, Dimensions } from 'react-native';
import relatedStyles from './relatedStyle';

const Related = () => {
  const screenHeight = Dimensions.get('window').height;
  let topPosition;

  // Ekran boyutuna göre farklı pozisyon belirleme
  if (screenHeight >= 812) {
    topPosition = screenHeight * 0.1 - 200;
  } else {
    topPosition = screenHeight * 0.2;
  }

  return (
    <View style={[relatedStyles.container, { top: topPosition }]}>
      <Star1
        size="15"
        color="#fd9220"
        variant="Bold"
      />
      <Text style={relatedStyles.related}>4.6</Text>
    </View>
  );
};

export default Related;


