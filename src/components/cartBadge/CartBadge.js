import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../../colors/colors';

function CartBadge() {
    const cart = useSelector((state) => state.cart.cart);

    // Sepetteki ürünlerin toplam miktarını hesapla
    const getCartQuantity = () => {
        let totalQuantity = 0;
        if (cart.length > 0) {
            totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        }
        return totalQuantity;
    };

    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: colors.orange,
                borderRadius: 10,
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                top: 0,
                right: 0,
                zIndex: 1,
            }}
        >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
                {getCartQuantity()}
            </Text>
        </View>
    );
}

export default CartBadge;
