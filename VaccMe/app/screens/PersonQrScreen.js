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
import GoogleSignIn from '../network/GoogleSignIn';

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

    const pollForIdentification = async () => {
        let sessionId;
        let result;
        try {
            sessionId = await SecureStore.getItemAsync('sessionId');
            if (await PollForIdentification(sessionId)) {
                result = await GoogleSignIn();
                if (result.type === 'success') {
                    await Identify(result.idToken);
                }
            }
            console.log('Polled via PollForIdentification');
        } catch (error) {
            console.error(error);
            alert('Pollfailed');
            getQrString();
        }
    };

    React.useEffect(() => {
        updateQrString();

        const qrTimer = setInterval(() => {
            updateQrString();
        }, 30000);

        return () => {
            clearInterval(qrTimer);
        };
    }, []);

    React.useEffect(() => {
        const pollingTimer = setInterval(() => {
            //pollForIdentification();
            console.log('poll PersonQrScreen');
        }, 5000);

        return () => {
            clearInterval(pollingTimer);
        };
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
