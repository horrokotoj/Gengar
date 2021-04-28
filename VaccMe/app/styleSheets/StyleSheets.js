import { StyleSheet } from 'react-native';

const tabSheetColor = 'rgba(255, 255, 255, 0.5)';
const mainTextColor = 'yellow';
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
        fontSize: 50,
        textDecorationLine: 'underline',
        color: mainTextColor,
    },
    slogan: {
        fontSize: 15,
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
        borderWidth: 3,
        borderRadius: 50,
        justifyContent: 'center',
    },
    touchableHighlightText: {
        textAlign: 'center',
        fontSize: 20,
    },
    tabSheet: {
        flex: 5,
        backgroundColor: tabSheetColor,
        height: '70%',
        width: '70%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    tabSheetHeader: {
        fontSize: 40,
        textDecorationLine: 'underline',
        color: secondaryTextColor,
        opacity: 1,
    },
    vardguiden: {
        height: 100,
        width: 200,
        margin: 50,
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
});
