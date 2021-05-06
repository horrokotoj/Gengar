import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import * as SecureStore from 'expo-secure-store';
import QRCode from 'react-native-qrcode-svg';
import UpdateQrString from '../network/UpdateQrString';

/**
 * @brief Renders a QR screen
 * @brief Fetches a string to render a qr-code from secure store.
 * @returns A QR screen
 */
function PersonQrScreens() {
    const [isLoadingQr, setLoadingQr] = React.useState(true);
    const [dataQRstring, setQr] = React.useState(null);

    const getQrString = async () => {
        let qrString;
        try {
            qrString = await SecureStore.getItemAsync('userQrString');
            console.log(qrString); //TODO: Remove after debugging
            if (qrString) {
                setQr(qrString);
                setLoadingQr(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateQrString = async () => {
        let userId;
        try {
            userId = await SecureStore.getItemAsync('userId');
            await UpdateQrString(userId);
            console.log('Updated via UpdateQrString');
            getQrString();
        } catch (error) {
            console.error(error);
            alert('Updated from local storage. Check internet connection.');
            getQrString();
        }
    };

    React.useEffect(() => {
        getQrString();

        const timer = setInterval(() => {
            updateQrString();
        }, 15000);
        return () => clearInterval(timer);
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
                <View style={styleSheets.qrSheet}>
                    {isLoadingQr ? (
                        <Text>Loading qr-code</Text>
                    ) : (
                        <QRCode
                            value={dataQRstring}
                            size={360}
                            style={styleSheets.qrCode}
                        />
                    )}
                </View>

                <View style={styleSheets.filler}>
                    <TouchableHighlight
                        style={styleSheets.touchableHighlight}
                        onPress={() => {
                            updateQrString();
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

export default PersonQrScreens;

/* 
{isLoadingUrl ? (
    <Text>Loading url</Text>
) : (
    <FlatList
        data={dataQRstring}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
            <Text>
                {item.name}, {item.releaseYear}
            </Text>
        )}
    />
)}
 */

/* const getMoviesFromApiAsync = async () => {
    try {
        let response = await fetch(
            'http://10.0.2.2:8000/userdata/234385785823438578589'
        );
        let json = await response.json();
        setLoadingUrl(false);
        setQr(json.dataQRstring);
    } catch (error) {
        console.error(error);
    }
};

getMoviesFromApiAsync();
}, []); */

/* 
var obj = { name: "John", age: 30, city: "New York" };
JSON.stringify(obj) = to string;

JSON.parse() = to JSON;
 */
