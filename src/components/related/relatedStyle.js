import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const relatedStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        left: 3,
        backgroundColor: colors.bg,
        padding: 0.1,
        borderRadius: 5,
    },
    related: {
        color: colors.orange,
        fontWeight: '500',
        letterSpacing: 0.01,
        fontSize: 13,
    },

});
export default relatedStyles;