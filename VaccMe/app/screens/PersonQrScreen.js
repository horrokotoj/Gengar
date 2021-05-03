import React from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

/**
 * @brief Renders a QR screen
 * @returns A QR screen
 */
function PersonQrScreens() {
    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        ></ImageBackground>
    );
}

export default PersonQrScreens;
