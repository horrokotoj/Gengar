import React from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { styleSheets } from '../styleSheets/StyleSheets';
import { AuthContext } from '../context/AuthContext';

//TODO: Intyg ska va en flatlist (från front_end_home_page) och
//covid-knappen ska nagivera till qr scanner som sparar datan

/**
 * @brief Renders a home screen for a business user
 * @returns A home screen
 */
function BusinessHomeScreen({ navigation }) {
    const { signOut } = React.useContext(AuthContext);

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
                    <Text style={styleSheets.tabSheetHeader}>Hem</Text>
                    <TouchableHighlight
                        style={styleSheets.touchableHighlight}
                        onPress={() => {
                            navigation.navigate('BusinessCertScanned');
                        }}
                    >
                        <Text style={styleSheets.touchableHighlightText}>
                            Covid-19
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styleSheets.filler}>
                    <TouchableHighlight
                        style={styleSheets.touchableHighlight}
                        onPress={() => signOut()}
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

export default BusinessHomeScreen;
