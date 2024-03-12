import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabMenu from '../router/TabMenu';
import { NativeBaseProvider } from 'native-base';
import MenuIcon from '../components/MenuIcon';

const PackageProvider = () => {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <TabMenu />
                <MenuIcon />
            </NativeBaseProvider>
        </NavigationContainer>
    )
}

export default PackageProvider