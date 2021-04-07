import React from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    Text,
    View,
    Linking,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

function PersonBookScreen(props) {
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
                    <Text style={styleSheets.tabSheetHeader}>
                        Boka vaccination
                    </Text>
                    <Image
                        style={styleSheets.vardguiden}
                        source={require('../assets/1177.png')}
                        onPress={() =>
                            Linking.openURL(
                                'https://www.1177.se/behandling--hjalpmedel/vaccinationer/'
                            )
                        }
                    ></Image>
                </View>
                <View style={styleSheets.filler}></View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonBookScreen;
