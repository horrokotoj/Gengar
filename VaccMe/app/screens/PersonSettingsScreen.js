import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

function PersonSettingsScreen({ navigation }) {
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
                        Inställningar
                    </Text>
                </View>
                <View style={styleSheets.filler}>
                    <TouchableHighlight
                        style={styleSheets.touchableHighlight}
                        onPress={() => {
                            navigation.navigate('WelcomScreen', {
                                screen: 'PersonScreen',
                            });
                        }}
                    >
                        <Text style={styleSheets.touchableHighlightText}>
                            Logga ut
                        </Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonSettingsScreen;
