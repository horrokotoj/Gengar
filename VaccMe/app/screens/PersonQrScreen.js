import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { styleSheets } from '../styleSheets/StyleSheets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as SecureStore from 'expo-secure-store';

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
                <QRCode
                    //QR code value
                    value="http://google.com/"
                    //size of QR Code
                    size={250}
                    //Color of the QR Code (Optional)
                    color="black"
                    //Background Color of the QR Code (Optional)
                    backgroundColor="white"
                    //Logo of in the center of QR Code (Optional)
                    /*logo={{ url:'https://www.iconfinder.com/icons/2924061/science_shot_srynge_vaccination_vaccine_icon'}}*/
                    //Center Logo size  (Optional)
                    logoSize={30}
                    //Center Logo margin (Optional)
                    logoMargin={2}
                    //Center Logo radius (Optional)
                    logoBorderRadius={15}
                    //Center Logo background (Optional)
                    logoBackgroundColor="white"
                />
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonQrScreen;
