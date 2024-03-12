import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from '../router/MyTabs';
import { NativeBaseProvider } from 'native-base';
import MenuIcon from '../components/MenuIcon';

const PackageProvider = () => {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <MyTabs />
                <MenuIcon />
            </NativeBaseProvider>
        </NavigationContainer>
    )
}

export default PackageProvider