import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

function PersonQrScreens(props) {
    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        ></ImageBackground>
    );
}

export default PersonQrScreens;
