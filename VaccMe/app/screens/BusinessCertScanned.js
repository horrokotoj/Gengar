import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import { FlatList } from 'react-native-gesture-handler';

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
 * @brief Renders a QR screen
 * @returns A QR screen
 */
function BusinessCertScanned({ navigation }) {
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
                    <Text style={styleSheets.tabSheetHeader}>
                        {' '}
                        Intyg för Ebba{' '}
                    </Text>
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
                <TouchableHighlight
                    style={styleSheets.touchableHighlight}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styleSheets.touchableHighlightText}>back</Text>
                </TouchableHighlight>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default BusinessCertScanned;