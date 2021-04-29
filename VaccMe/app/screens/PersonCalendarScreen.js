import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
    ScrollView
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import * as SecureStore from 'expo-secure-store';

/**
 * @brief Renders a calendar screen
 * @returns A calendar screen
 */
function PersonCalendarScreen() {
    const [userTokenPerson, setUserTokenPerson] = React.useState(null);
    const [userId, setUserId] = React.useState(null);
    const [userName, setUserName] = React.useState(null);


    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const getUserTokenPerson = async () => {
            let dataToken;

            try {
                dataToken = await SecureStore.getItemAsync('userTokenPerson');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            setUserTokenPerson(dataToken);
        };

        const getUserID = async () => {
            let dataId;

            try {
                dataId = await SecureStore.getItemAsync('userId');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            setUserId(dataId);
        };

        const getUserName = async () => {
            let dataName;

            try {
                dataName = await SecureStore.getItemAsync('userName');
            } catch (e) {

            }
            setUserName(dataName);
        }

        getUserTokenPerson();

        getUserID();

        getUserName();
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
                    <ScrollView>
                    <Text>IdToken: {userTokenPerson}</Text>
                    <Text>UserId: {userId}</Text>
                    <Text>UserName: {userName}</Text>
                    </ScrollView>
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
