import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import colors from '../colors/colors';
import Header from '../components/Header';

function Assistan() {
  return <View style={styles.container}>

      <View style={styles.topContainer}>
        <View style={styles.metaContainer}>
          <View>
            <Text style={styles.timings}>Uzgunuz</Text>
            <Text style={styles.description}>Bu sayfa yapim asamasindadir!</Text>
          </View>
         
        </View>
        <View style={{}}>

        <Image source={{
        uri: 'https://img.pixers.pics/pho_wat(s3:700/FO/65/14/93/72/700_FO65149372_aaaf120f3498ff70d870d94bc0736bec.jpg,689,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,469,650,jpg)/cikartmalar-uzgun-kopek-karikatur-illustrasyon.jpg.jpg'
      }} style={styles.avatar} />
      </View>
      </View>
    </View>;
}

const styles = StyleSheet.create({
  container: {

    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'center',
    width: 375,
    maxWidth: '100%',
    height: '50%',
    marginTop: 300,
  


  },
  timings: {
    color: colors.orange,
    fontSize:20,
    fontWeight: 'bold',
  },
  metaContainer: {
    justifyContent: 'space-between'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
    
  },
  description: {
    color: colors.orange,
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#22d3ee',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 2
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14
  }
});

export default Assistan;