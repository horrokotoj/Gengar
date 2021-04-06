import React from 'react';
import { ImageBackground, Text, TouchableHighlight, View } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

function PersonHomeScreen(props) {
    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
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
        </ImageBackground>
    );
}

export default PersonHomeScreen;
