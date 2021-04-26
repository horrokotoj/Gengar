import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, SafeAreaView, Text } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

/**
 * @brief Renders a QR screen
 * @returns A QR screen
 */
function PersonQrScreens() {
    const [isLoadingUrl, setLoadingUrl] = useState(true);
    const [dataUrl, setData] = useState([]);

    //Fetching our data from the url
    useEffect(() => {
        const getMoviesFromApiAsync = async () => {
            try {
                let response = await fetch(
                    'https://reactnative.dev/movies.json'
                );
                let json = await response.json();
                setLoadingUrl(false);
                setData(json.movies);
            } catch (error) {
                console.error(error);
            }
        };

        getMoviesFromApiAsync();
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
