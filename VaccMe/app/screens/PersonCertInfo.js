import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
    Button,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * @brief Renders a screen with information about a specific vaccination certificate
 * @returns A vaccination certificate screen
 */

function PersonInfoCert({ navigation }) {
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
                    <Text style={styleSheets.tabSheetHeader}> Intyg info </Text>
                    <View style={styleSheets.vaccinated}>
                        <Text style={styleSheets.vaccinatedText}>
                            {' '}
                            Covid-19 vaccinerad{'       '}
                            <Ionicons
                                name="checkmark-circle"
                                style={{ color: 'black', fontSize: 24 }}
                            />
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={[styleSheets.vaccInfo, { paddingBottom: 0 }]}
                        >
                            Datum utfört: 2021-01-20
                        </Text>
                        <Text
                            style={[
                                styleSheets.vaccInfo,
                                { color: 'grey', paddingTop: 0 },
                            ]}
                        >
                            Nästa dos: 2021-02-04
                        </Text>
                        <Text style={[styleSheets.vaccInfo, {}]}>
                            Vaccintyp: Moderna - mRNA - 1273
                        </Text>
                        <Text style={[styleSheets.vaccInfo, {}]}>
                            Utfört av: Capio vårdcentral
                        </Text>
                    </View>
                </View>
                <View style={styleSheets.filler}>
                    <TouchableHighlight
                        style={styleSheets.touchableHighlight}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styleSheets.touchableHighlightText}>
                            Back
                        </Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonInfoCert;
