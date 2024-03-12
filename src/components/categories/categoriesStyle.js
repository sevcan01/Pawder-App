import { StyleSheet } from "react-native";
import Categories from './Categories';

const CategoriesStyle = StyleSheet.create({
    imageContainer: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5
    },
    productImage: {

        width: 80,
        height: 80,

    },
    text: {
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 10,
        marginLeft: 15
    }
})

export default CategoriesStyle