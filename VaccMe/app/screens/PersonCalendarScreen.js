import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

/**
 * @brief Renders a calendar screen
 * @returns A calendar screen
 */
function PersonCalendarScreen() {
    const [userTokenPerson, setUserTokenPerson] = React.useState(null);

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const getUserTokenPerson = async () => {
            let data;

            try {
                data = await SecureStore.getItemAsync('userTokenPerson');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            setUserTokenPerson(data);
        };

        getUserTokenPerson();
    }, []);

    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <SafeAreaView style={styleSheets.safe}>
                <View style={styleSheets.logo}>
                    <Text style={styleSheets.name}>VaccMe</Text>
                </View>
                <View style={styleSheets.tabSheet}>
                    <Text style={styleSheets.tabSheetHeader}> Kalender </Text>
                    <Text>{userTokenPerson}</Text>
                </View>
                <View style={styleSheets.filler}>
                    <TouchableHighlight style={styleSheets.touchableHighlight}>
                        <Text style={styleSheets.touchableHighlightText}>
                            Lägg till i kalendern
                        </Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonCalendarScreen;
