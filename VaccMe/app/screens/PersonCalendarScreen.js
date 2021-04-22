import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import * as SecureStore from 'expo-secure-store';

/**
 * @brief Renders a calendar screen
 * @returns A calendar screen
 */
function PersonCalendarScreen() {
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
