import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
//import QRCode from 'react-native-qrcode-svg';
import { styleSheets } from '../styleSheets/StyleSheets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { QRCode } from 'react-native-custom-qr-codes-expo';

/**
 * @brief Renders a QR screen
 * @returns A QR screen
 */
function PersonQrScreen(props) {
    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <SafeAreaView style={styleSheets.safe}>
                <QRCode content="https://reactnative.com" />
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonQrScreen;
