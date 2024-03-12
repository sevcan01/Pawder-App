import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import Header from '../../components/Header';
import asistanStyles from './asistanStyle';

function Assistan() {
  return <View style={asistanStyles.container}>

    <View style={asistanStyles.topContainer}>
      <View style={asistanStyles.metaContainer}>
        <View>
          <Text style={asistanStyles.timings}>Uzgunuz</Text>
          <Text style={asistanStyles.description}>Bu sayfa yapim asamasindadir!</Text>
        </View>

      </View>
      <View>

        <Image source={{
          uri: 'https://img.pixers.pics/pho_wat(s3:700/FO/65/14/93/72/700_FO65149372_aaaf120f3498ff70d870d94bc0736bec.jpg,689,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,469,650,jpg)/cikartmalar-uzgun-kopek-karikatur-illustrasyon.jpg.jpg'
        }} style={asistanStyles.avatar} />
      </View>
    </View>
  </View>;
}



export default Assistan;