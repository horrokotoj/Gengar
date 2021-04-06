import React from 'react';
import { ImageBackground, Text, TouchableHighlight, View } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

function PersonCertScreen(props) {
    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styleSheets.logo}>
                <Text style={styleSheets.name}>VaccMe</Text>
            </View>
            <View style={styleSheets.tabSheet}>
                <Text style={styleSheets.tabSheetHeader}> Mina intyg </Text>
            </View>
            <View style={styleSheets.filler}>
                <TouchableHighlight style={styleSheets.touchableHighlight}>
                    <Text style={styleSheets.touchableHighlightText}>
                        Lägg till intyg
                    </Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    );
}

export default PersonCertScreen;
