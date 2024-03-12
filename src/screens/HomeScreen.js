import { StyleSheet, SafeAreaView, View } from 'react-native'
import React from 'react'
import { Box, ScrollView, Text } from 'native-base'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import ProductList from '../components/ProductList'
import Categories from '../components/Categories'
import CustomInput from '../components/CustomInput'
const HomeScreen = () => {
  return (
    <>
      <Header />
      <CustomInput />
      <ScrollView>
        <Carousel />

        <ProductList />
        <Categories title={'Kategoriler'} />


      </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})