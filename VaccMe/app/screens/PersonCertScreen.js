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
import PersonCertInfo from '../screens/PersonCertInfo';
import { FlatList } from 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';
import UpdateCertificates from '../network/UpdateCertificates';

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
 * @brief Will render a list of certificates sorted by name from securestore.
 * @returns A certificate screen
 */

function PersonCertScreen() {
    const [isLoadingUrl, setLoadingUrl] = React.useState(true);
    const [dataUrl, setData] = React.useState([]);

    const getCerts = async () => {
        let dataCerts;
        try {
            dataCerts = await SecureStore.getItemAsync('userCert');
            console.log(dataCerts);
            setData(JSON.parse(dataCerts).certificates);
            setLoadingUrl(false);
        } catch (error) {
            console.error(error);
        }
    };

    const updateCerts = async () => {
        let userId;
        try {
            userId = await SecureStore.getItemAsync('userId');
            UpdateCertificates(userId);
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
    //Fetching our data from the url
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
                    <Text style={[styleSheets.name, styleSheets.screenName]}>
                        VaccMe
                    </Text>
                </View>
                <View style={styleSheets.tabSheet}>
                    {/* <View style={styleSheets.container}>
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
                    </View> */}
                    <Text style={styleSheets.tabSheetHeader}> Mina intyg </Text>
                    {isLoadingUrl ? (
                        <Text>Loading url</Text>
                    ) : (
                        <FlatList
                            data={dataUrl.sort((a, b) =>
                                a.name.localeCompare(b.name)
                            )}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) => (
                                <Text>
                                    {item.name}, {item.registerdate}
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

export default PersonCertScreen;
