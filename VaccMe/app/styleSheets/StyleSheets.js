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
    invalid: {
        flex: 1,
        backgroundColor: 'red',
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
    touchableHighlightDark: {
        width: 250,
        height: 50,
        backgroundColor: secondaryTextColor,
        alignSelf: 'center',
        borderColor: mainTextColor,
        margin: 5,
        borderWidth: 3,
        borderRadius: 50,
        justifyContent: 'center',
    },
    touchableHighlightText: {
        textAlign: 'center',
        color: secondaryTextColor,
        fontSize: 20,
    },
    touchableHighlightTextLight: {
        textAlign: 'center',
        color: mainTextColor,
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
    qrSheet: {
        flex: 5,
        height: '70%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    qrCode: {
        marginTop: 500,
    },
    valid: {
        flex: 1,
        backgroundColor: 'green',
    },
    validView: {
        height: '100%',
        width: '100%',
        backgroundColor: 0.8,
    },
    vardguiden: {
        height: 200,
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
    scanner: {
        flex: 1,
    },
    scannerView: {
        flex: 5,
        justifyContent: 'center',
    },
    cancelButtonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    touchableValid: {
        width: '100%',
        height: '100%',
    },
});
