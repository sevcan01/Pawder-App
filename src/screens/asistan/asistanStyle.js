import { StyleSheet } from "react-native";
import colors from '../../colors/colors';

const asistanStyles = StyleSheet.create({
    container: {

        paddingVertical: 16,
        paddingHorizontal: 12,
        borderRadius: 5,
        alignSelf: 'center',
        width: 375,
        maxWidth: '100%',
        height: '50%',
        marginTop: 300,



    },
    timings: {
        color: colors.orange,
        fontSize: 20,
        fontWeight: 'bold',
    },
    metaContainer: {
        justifyContent: 'space-between'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 100,

    },
    description: {
        color: colors.orange,
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#22d3ee',
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 2
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 14
    }
});

export default asistanStyles;