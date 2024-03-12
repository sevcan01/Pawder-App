import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [
        {
            id: '01',
            name: 'Köpek Mamaları',
            photo: require('../../../assets/mama2.jpeg')
        },
        {
            id: '02',
            name: 'Aksesuarlar',
            photo: require('../../../assets/aksesuar2.jpeg')
        },
        {
            id: '03',
            name: 'Köpek Kıyafetleri',
            photo: require('../../../assets/kiyafet2.jpg')

        },
        {
            id: '04',
            name: 'Yataklar',
            photo: require('../../../assets/yatak.jpeg')
        },
        {
            id: '05',
            name: 'Sağlık ve Bakım Ürünleri',
            photo: require('../../../assets/saglik.jpeg')
        }

    ]
}

export const { reducer, actions } = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        }
    }
})

export const { setCategories } = actions

export default reducer