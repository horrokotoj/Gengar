import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import { FlatList } from 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';
import UpdateCertificates from '../network/UpdateCertificates';
import { AuthContext } from '../context/AuthContext';

/**
 * @brief Renders a user certificate screen
 * @brief Will render a list of certificates sorted by name from securestore.
 * @returns A certificate screen
 */

function PersonCertScreen({ navigation }) {
    const { signOut } = React.useContext(AuthContext);
    const [isLoadingUrl, setLoadingUrl] = React.useState(true);
    const [dataUrl, setData] = React.useState([]);

    const getCerts = async () => {
        let dataCerts;
        try {
            dataCerts = await SecureStore.getItemAsync('userCert');
            console.log('updated dataCerts in PersonCertScreen');
            if (dataCerts) {
                setData(JSON.parse(dataCerts).certificates);
                setLoadingUrl(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateCerts = async () => {
        let sessionId;
        try {
            sessionId = await SecureStore.getItemAsync('sessionId');
            if (await UpdateCertificates(sessionId)) {
                console.log('Updated via UpdateCertificates');
                getCerts();
            } else {
                alert('Session expired');
                signOut();
            }
        } catch (error) {
            console.error(error);
            getCerts();
        }
    };

    //Fetching certificates and initaliazes an update inteval.
    React.useEffect(() => {
        updateCerts();
        const timer = setInterval(() => {
            updateCerts();
        }, 1000 * 60);
        return () => clearInterval(timer);
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
                    <Text style={styleSheets.tabSheetHeader}> Mina intyg </Text>
                    {isLoadingUrl ? (
                        <Text>Loading url</Text>
                    ) : (
                        <View style={styleSheets.container}>
                            <FlatList
                                data={dataUrl.sort((a, b) =>
                                    a.name.localeCompare(b.name)
                                )}
                                keyExtractor={(item) => item.name}
                                renderItem={({ item }) => (
                                    <TouchableHighlight
                                        onPress={() => {
                                            navigation.navigate(
                                                'PersonCertInfo'
                                            );
                                        }}
                                        style={styleSheets.scrollItem}
                                    >
                                        <Text style={styleSheets.text}>
                                            {item.name}, {item.registerdate}
                                        </Text>
                                    </TouchableHighlight>
                                )}
                            ></FlatList>
                        </View>
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
