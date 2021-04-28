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
            }catch (e) {

            }
            setUserId(dataId);
        }

        const getMoviesFromApiAsync = async () => {
            try {
                let response = await fetch(
                    'http://127.0.0.1:8000/userdata/234385785823438578589'
                );
                let json = await response.json();
                setLoadingUrl(false);
                setData(json.certificates);
            } catch (error) {
                console.error(error);
            }
        };
        getUserId();
        getMoviesFromApiAsync();
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
                            keyExtractor={({ id }, index) => id}
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
