import React from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    Text,
    View,
    Linking,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styleSheets } from '../styleSheets/StyleSheets';

/**
 * @brief Renders a booking screen
 * @returns A booking screen
 */
function PersonBookScreen() {
    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <SafeAreaView style={styleSheets.safe}>
                <View style={styleSheets.logo}>
                    <Text style={[styleSheets.name, styleSheets.screenName]}>
                        VaccMe
                    </Text>
                </View>
                <View style={styleSheets.tabSheet}>
                    <Text style={styleSheets.tabSheetHeader}>Boka</Text>
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL(
                                'https://www.1177.se/behandling--hjalpmedel/vaccinationer/'
                            )
                        }
                    >
                        <Image
                            style={styleSheets.vardguiden}
                            source={require('../assets/1177.png')}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styleSheets.filler}></View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonBookScreen;
