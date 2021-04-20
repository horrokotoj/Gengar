import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
    Button,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styleSheets } from '../styleSheets/StyleSheets';
import PersonCertInfo from '../screens/PersonCertInfo';

const DATA = [
    { key: 'Covid-19' },
    { key: 'HPV' },
    { key: 'TBE' },
    { key: 'Malaria' },
    { key: 'Hepatit B' },
    { key: 'Svininfluensa' },
    { key: 'Vaccin1' },
    { key: 'Vaccin2' },
    { key: 'Vaccin3' },
    { key: 'Vaccin4' },
    { key: 'Vaccin5' },
    { key: 'Vaccin6' },
];

/**
 * @brief Renders a user certificate screen
 * @returns A certificate screen
 */

function PersonCertScreen({ navigation }) {
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
                    <Text style={styleSheets.tabSheetHeader}> Mina intyg </Text>
                    <View style={styleSheets.container}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => (
                                <TouchableHighlight
                                    onPress={() => {
                                        navigation.navigate('PersonCertInfo');
                                    }}
                                    style={styleSheets.scrollItem}
                                >
                                    <Text style={styleSheets.text}>
                                        {item.key}
                                    </Text>
                                </TouchableHighlight>
                            )}
                        ></FlatList>
                    </View>
                </View>
                <View style={styleSheets.filler}>
                    <TouchableHighlight style={styleSheets.touchableHighlight}>
                        <Text style={styleSheets.touchableHighlightText}>
                            Lägg till intyg
                        </Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonCertScreen;
