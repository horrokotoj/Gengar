import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';


/**
 * @brief Renders a QR screen
 * @returns A QR screen
 */
function PersonQrScreens(props) {
    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <SafeAreaView style={styleSheets.safe}></SafeAreaView>
        </ImageBackground>
    );
}

export default PersonQrScreens;
