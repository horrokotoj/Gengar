import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import * as SecureStore from 'expo-secure-store';
import { FlatList } from 'react-native-gesture-handler';
import UpdateCertificates from '../network/UpdateCertificates';

/**
 * @brief Renders a calendar screen
 * @brief Will render a list of certificates sorted by expirationdate from securestore.
 * @returns A calendar screen
 */
function PersonCalendarScreen() {
    const [isLoadingUrl, setLoadingUrl] = React.useState(true);
    const [dataUrl, setData] = React.useState([]);

    const getCerts = async () => {
        let dataCerts;
        try {
            dataCerts = await SecureStore.getItemAsync('userCert');
            //console.log(dataCerts);
            setData(JSON.parse(dataCerts).certificates);
            setLoadingUrl(false);
        } catch (error) {
            console.error(error);
        }
    };

    const updateCerts = async () => {
        let sessionId;
        try {
            sessionId = await SecureStore.getItemAsync('sessionId');
            UpdateCertificates(sessionId);
            console.log('Updated via UpdateCertificates');
            getCerts();
        } catch (error) {
            console.error(error);
            getCerts();
        }
    };

    React.useEffect(() => {
        getCerts();
    }, []);

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
                    <Text style={styleSheets.tabSheetHeader}> Kalender </Text>
                    {isLoadingUrl ? (
                        <Text>Loading url</Text>
                    ) : (
                        <FlatList
                            data={dataUrl.sort((a, b) =>
                                a.expirationdate.localeCompare(b.expirationdate)
                            )}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) => (
                                <Text>
                                    {item.name}, {item.expirationdate}
                                </Text>
                            )}
                        />
                    )}
                </View>
                <View style={styleSheets.filler}>
                    <TouchableHighlight
                        style={styleSheets.touchableHighlight}
                        onPress={() => {
                            updateCerts();
                        }}
                    >
                        <Text style={styleSheets.touchableHighlightText}>
                            Uppdatera
                        </Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonCalendarScreen;
