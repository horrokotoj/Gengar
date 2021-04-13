import React from 'react';
import { ImageBackground, Text } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';


/**
 * @brief Renders a loading screen
 * @returns A loading screen
 */
function Splash() {
    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <Text style={{ alignSelf: 'center' }}>loading...</Text>
        </ImageBackground>
    );
}

export default Splash;
