import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [
        {
            "id": 1,
            "marka": "Royal Canin",
            "fiyat": 1150,
            "indirimli_fiyat": 1035, // 10% indirim uygulandı
            "kategori": "Kuru Mama",
            "miktar": "5 kg",
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNr25Ow33yrpiy_X0NM3PdnGhyeKPKREKxCjgxB9TaxbSmOX8kUNuogJEmIMshrT-V3hY&usqp=CAU",
            "quantity": 1,
        },
        {
            "id": 2,
            "marka": "Royal Canin",
            "fiyat": 780,
            "indirimli_fiyat": 702, // 10% indirim uygulandı
            "kategori": "Konserve Mama",
            "miktar": "400 gr",
            "foto": "https://furryfriends.ae/cdn/shop/products/3182550778305-1.jpg?v=1656573879",
            "quantity": 1,
        },
        {
            "id": 3,
            "marka": "Royal Canin Yetiskin",
            "fiyat": 400,
            "indirimli_fiyat": 360, // 10% indirim uygulandı
            "kategori": "Kuru Mama",
            "miktar": "12 x 85gr",
            "foto": "https://cdn.dsmcdn.com/mnresize/400/-/ty519/product/media/images/20220831/14/167286747/555752451/1/1_org.jpg",
            "quantity": 1,
        },
        {
            "id": 4,
            "marka": "Royal Canin",
            "fiyat": 490,
            "indirimli_fiyat": 441, // 10% indirim uygulandı
            "kategori": "Konserve Mama",
            "miktar": "800 gr",
            "foto": "https://static.miscota.com/media/1/photos/products/043427/RC-VDI-CardiacWet-410-MV-Eretailkit-1-es-ES-64abad4acc301_g.jpg",
            "quantity": 1,
        },
        {
            "id": 5,
            "marka": "Royal Canin",
            "fiyat": 300,
            "indirimli_fiyat": 270, // 10% indirim uygulandı
            "kategori": "Kuru Mama",
            "miktar": "15 kg",
            "foto": "https://cdn.akakce.com/royal-canin/royal-canin-ccn-exigent-pouch-loaf-85-gr-secici-yetiskin-kopek-konservesi-z.jpg",
            "quantity": 1,
        },
        {
            "id": 6,
            "marka": "Royal Canin",
            "fiyat": 120,
            "indirimli_fiyat": 108, // 10% indirim uygulandı
            "kategori": "Konserve Mama",
            "miktar": "1 kg",
            "foto": "https://ideacdn.net/shop/bj/58/myassets/products/468/rc-shn-wet-startermousse-mv-eretailkit.jpg?revision=1708603387",
            "quantity": 1,
        },
        {
            "id": 7,
            "marka": "Royal Canin",
            "fiyat": 1250,
            "indirimli_fiyat": 1125, // 10% indirim uygulandı
            "kategori": "Kuru Mama",
            "miktar": "20 kg",
            "foto": "https://cdn.cimri.io/image/200x200/royal-canin-mini-adult-konserve-12x85-gr-kopek-mamasi_602163470.jpg",
            "quantity": 1,
        },
        {
            "id": 8,
            "marka": "Royal Canin",
            "fiyat": 150,
            "indirimli_fiyat": 135, // 10% indirim uygulandı
            "kategori": "Konserve Mama",
            "miktar": "600 gr",
            "foto": "https://static.ticimax.cloud/2601/uploads/urunresimleri/buyuk/royal-canin-starter-mousse-yavru-konse-34388f.jpg",
            "quantity": 1,
        },
        {
            "id": 9,
            "marka": "Royal Canin",
            "fiyat": 480,
            "indirimli_fiyat": 432, // 10% indirim uygulandı
            "kategori": "Kuru Mama",
            "miktar": "8 kg",
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNr25Ow33yrpiy_X0NM3PdnGhyeKPKREKxCjgxB9TaxbSmOX8kUNuogJEmIMshrT-V3hY&usqp=CAU",
            "quantity": 1,
        },
        {
            "id": 10,
            "marka": "Royal Canin",
            "fiyat": 100,
            "indirimli_fiyat": 90, // 10% indirim uygulandı
            "kategori": "Konserve Mama",
            "miktar": "450 gr",
            "foto": "https://furryfriends.ae/cdn/shop/products/3182550778305-1.jpg?v=1656573879",
            "quantity": 1,
        }
    ]
}

export const { reducer, actions } = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { setProducts } = actions

export default reducer