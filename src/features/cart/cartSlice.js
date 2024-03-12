import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}

export const { reducer, actions } = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newProduct = action.payload
            const isExist = state.cart.find(product => product.id === newProduct.id)

            if (isExist) {
                isExist.quantity++
            } else {
                state.cart.push(newProduct)
            }
        },
        incrementQuantity: (state, action) => {
            const id = action.payload
            const product = state.cart.find(product => product.id === id)

            if (product) {
                product.quantity++
            }
        },
        decrementQuantity: (state, action) => {
            const id = action.payload
            const product = state.cart.find(product => product.id === id)

            if (product.quantity === 1) {
                state.cart = state.cart.filter(product => product.id !== id)
            } else {
                product.quantity--
            }
        },
        clearCart: (state) => {
            state.cart = []
        },

    },
})

export const { addToCart, incrementQuantity, decrementQuantity, clearCart, } = actions

export default reducer