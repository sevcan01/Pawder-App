import React from 'react';
import { Pressable, Dimensions } from 'react-native';
import { Menu } from 'iconsax-react-native';

const MenuIcon = () => {
    const screenHeight = Dimensions.get('window').height;
    let topPosition;


    if (screenHeight >= 812) {
        topPosition = screenHeight * 0.85;
    } else {
        topPosition = screenHeight * 0.95;
    }

    return (
        <Pressable
            style={{
                position: 'absolute',
                top: topPosition,
                left: 15,
                backgroundColor: '#FD9220',
                padding: 10,
                borderRadius: 50,
            }}>
            <Menu size="32" color="#fff" variant="TwoTone" />
        </Pressable>
    );
};

export default MenuIcon;