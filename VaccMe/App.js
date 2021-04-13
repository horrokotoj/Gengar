import * as React from 'react';
import Navigator from './app/navigators/Navigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () =>
    Font.loadAsync({
        'oswald-regular': require('./app/assets/fonts/Oswald-Bold.ttf'),
        'oswald-semibold': require('./app/assets/fonts/Oswald-SemiBold.ttf'),
        'oswald-bold': require('./app/assets/fonts/Oswald-Bold.ttf'),
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
