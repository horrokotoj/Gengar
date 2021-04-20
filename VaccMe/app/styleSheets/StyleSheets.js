import { StyleSheet } from 'react-native';

const tabSheetColor = 'rgba(255, 255, 255, 0.5)';
const mainTextColor = '#FFDB21';
const secondaryTextColor = 'black';

export const styleSheets = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    name: {
        fontSize: 70,
        textDecorationLine: 'underline',
        color: mainTextColor,
        fontFamily: 'oswald-bold',
        marginTop: 40,
    },
    screenName: {
        fontSize: 60,
        marginTop: 10,
    },
    slogan: {
        fontSize: 18,
        color: secondaryTextColor,
    },
    filler: {
        flex: 1,
    },
    keyboardAvoidingView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        width: 250,
        height: 50,
        margin: 5,
        backgroundColor: tabSheetColor,
        borderWidth: 1,
        borderRadius: 50,
        textAlign: 'center',
        fontSize: 20,
    },
    touchableHighlight: {
        width: 250,
        height: 50,
        backgroundColor: mainTextColor,
        alignSelf: 'center',
        borderColor: secondaryTextColor,
        margin: 5,
        borderWidth: 1.5,
        borderRadius: 50,
        justifyContent: 'center',
    },
    touchableHighlightText: {
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'oswald-bold',
        color: 'white',
        textShadowColor: 'grey',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    tabSheet: {
        flex: 5,
        backgroundColor: tabSheetColor,
        height: '70%',
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    tabSheetHeader: {
        fontSize: 30,
        margin: 10,
        //textDecorationLine: 'underline',
        textTransform: 'uppercase',
        color: secondaryTextColor,
        opacity: 1,
        fontFamily: 'oswald-regular',
        textShadowColor: 'grey',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    vardguiden: {
        height: 150,
        width: 200,
    },
    safe: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    qr: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'yellow',
    },
    containerQR: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    certButton: {
        width: 20,
        height: 20,
        backgroundColor: 'pink',
        alignSelf: 'center',
        borderColor: secondaryTextColor,
        margin: 5,
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        paddingTop: 20,
        paddingBottom: 60,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'grey',
        shadowOpacity: 0.5,
    },
    scrollItem: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10,
        padding: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        fontSize: 20,
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    vaccinated: {
        backgroundColor: '#FFE871',
        width: '90%',
        height: 56,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
    },
    vaccinatedText: {
        fontSize: 20,
    },
    vaccInfo: {
        fontSize: 20,
        color: 'black',
        padding: 10,
        margin: 5,
    },
    /*container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },*/
});
