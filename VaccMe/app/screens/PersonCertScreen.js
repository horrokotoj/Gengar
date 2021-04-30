import React, { useEffect, useState } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styleSheets } from '../styleSheets/StyleSheets';
import * as SecureStore from 'expo-secure-store';


/**
 * @brief Renders a user certificate screen
 * @brief Fetches user certificates and store in secure store
 * @brief Renders flatlist of certificates in secure store
 * @returns A certificate screen
 */
function PersonCertScreen() {
    const [isLoadingUrl, setLoadingUrl] = React.useState(true);
    const [dataUrl, setData] = React.useState([]);
    const [userId, setUserId] = React.useState(null);

    //Fetching our data from the url
    useEffect(() => {
        const getUserId = async () => {
            let dataId;
            try {
                dataId = await SecureStore.getItemAsync('userId');
            } catch (e) {

            }
            setUserId(dataId);
        }

        getUserId();

        const getCerts = async () => {
            let dataCerts;
            try {
                let response = await fetch(
                    'http://127.0.0.1:8000/userdata', {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          googleuserid: '234385785823438578589'     //TODO: userid är hårdkodad
                        }),
                      });
                let json = await response.json();
                await SecureStore.setItemAsync('userCert', json)
                console.log("done request");                        //TODO: Remove after debugging
                dataCerts = await SecureStore.getItemAsync('userCert');
                console.log(dataCerts);                             //TODO: Remove after debugging
                setData(JSON.parse(dataCerts).certificates);
                setLoadingUrl(false);
            } catch (error) {
                console.error(error);
                dataCerts = await SecureStore.getItemAsync('userCert');
                console.log(dataCerts);
                setData(JSON.parse(dataCerts).certificates);
                setLoadingUrl(false);
            }
        };

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
                    <Text style={styleSheets.tabSheetHeader}> Mina intyg </Text>
                    <Text>UserId: {userId}</Text>
                    {isLoadingUrl ? (
                        <Text>Loading url</Text>
                    ) : (
                        <FlatList
                            data={dataUrl}
                            keyExtractor={item => item.name}
                            renderItem={({ item }) => (
                                <Text>
                                    {item.name}, {item.expirationdate}
                                </Text>
                            )}
                        />
                    )}
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
