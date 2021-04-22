import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, SafeAreaView, Text } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

const moviesUrl = 'https://reactnative.dev/movies.json';

/**
 * @brief Renders a QR screen
 * @returns A QR screen
 */
function PersonQrScreens() {
    const [isLoadingUrl, setLoadingUrl] = useState(true);
    const [dataUrl, setDataUrl] = useState([]);

    //Fetching our data from the url
    useEffect(() => {
        fetch(moviesUrl)
            .then((response) => response.json())
            .then((json) => setDataUrl(json.movies))
            .catch((error) => alert(error))
            .finally(setLoadingUrl(false));
    }, []);

    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <SafeAreaView style={styleSheets.safe}>
                {isLoadingUrl ? (
                    <Text>Loading url</Text>
                ) : (
                    <FlatList
                        data={dataUrl}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>
                                {item.title}, {item.releaseYear}
                            </Text>
                        )}
                    />
                )}
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonQrScreens;
