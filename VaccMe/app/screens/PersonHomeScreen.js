import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

function PersonHomeScreen(props) {
    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styleSheets.tabSheet}>
                <Text style={styleSheets.tabSheetHeader}> Kalender </Text>
            </View>
        </ImageBackground>
    );
}

export default PersonHomeScreen;
