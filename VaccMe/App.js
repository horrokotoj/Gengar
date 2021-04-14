import React, { useState } from 'react';
import Navigator from './app/navigators/Navigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () =>
    Font.loadAsync({
        'oswald-regular': require('./app/assets/fonts/Oswald-Regular.ttf'),
        'oswald-bold': require('./app/assets/fonts/Oswald-Bold.ttf'),
        'oswald-light': require('./app/assets/fonts/Oswald-Light.ttf'),
        'oswald-extralight': require('./app/assets/fonts/Oswald-ExtraLight.ttf'),
        'oswald-medium': require('./app/assets/fonts/Oswald-Medium.ttf'),
    });

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (fontsLoaded) {
        return <Navigator />;
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={console.warn}
            />
        );
    }
}
