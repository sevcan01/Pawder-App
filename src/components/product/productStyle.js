import { Dimensions, StyleSheet } from "react-native";
import colors from "../../colors/colors";
const { width, height } = Dimensions.get('window');

const productStyles = StyleSheet.create({
    container: {
        padding: 5,
    },
    productContainer: {
        flexDirection: 'column',
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginHorizontal: width * 0.04,
        height: height * 0.28,
        padding: 5
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        padding: 10
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    productInfo: {
        flex: 1,
        padding: 5,
        alignItems: 'end',
        letterSpacing: 0.01,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceItem: {
        marginRight: 10,
    },
    productPrice: {
        fontSize: 16,
        textDecorationLine: 'line-through',
        color: colors.text,
    },
    priceDisc: {
        fontSize: 14,
        color: colors.orange,
        fontWeight: 'bold',
    },
    productBrand: {
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.01,
        color: colors.text_dark,
    },
    productCategory: {
        fontSize: 16,
        color: colors.text_dark,
    },
    productAmount: {
        fontSize: 14,
        marginTop: 5,
        letterSpacing: 0.01,
        color: '#666',
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 3.8,
        shadowOpacity: 0.5,
        width: 30,
        height: 30,
        backgroundColor: '#fd9220',
        position: 'absolute',
        right: 3,
        top: -110,
        borderRadius: 15,
    },
    text: {
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 10,
        marginLeft: 15
    }
});

export default productStyles;