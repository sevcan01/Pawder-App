import { View, Text } from 'react-native'
import React from 'react'
import { Pressable } from 'native-base'
import { Menu } from 'iconsax-react-native'

const MenuIcon = () => {
    return (
        <Pressable
            style={{
                position: 'absolute',
                top: 820,
                left: 15,
                backgroundColor: '#FD9220',
                padding: 10,
                borderRadius: 50,
            }}>
            <Menu size="32" color="#fff" variant="TwoTone" />
        </Pressable>
    )
}

export default MenuIcon