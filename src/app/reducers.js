import { combineReducers } from 'redux'

import ProductReducer from '../features/product/productSlice'
import CategoryReducer from '../features/category/categorySlice'
import CartReducer from '../features/cart/cartSlice'


export const reducers = combineReducers({
    product: ProductReducer,
    category: CategoryReducer,
    cart: CartReducer
})