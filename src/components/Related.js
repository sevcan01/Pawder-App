
import { Text, View } from 'native-base'
import React from 'react'
import {Star1} from 'iconsax-react-native';
import colors from '../colors/colors';
import { StyleSheet } from 'react-native';

const Related = () => {
  return (
    <View style={styles.container}>
        <Star1
 size="15"
 color="#fd9220"
 variant="Bold"
/>
<Text style={{color:colors.orange,fontWeight:'500',letterSpacing:0.01,fontSize:13}}>4.6</Text>
     
    </View>
  )
}

export default Related

const styles = StyleSheet.create({
  container: {
  flexDirection: 'row',
  position:'absolute',
left:3,
top:-120,
backgroundColor:colors.bg,
padding:0.1,
borderRadius:5,

  }

});