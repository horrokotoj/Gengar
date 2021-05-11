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
import PollForIdentification from '../network/PollForIdentification';
import GoogleSignIn from '../network/GoogleSignIn';
import Identify from '../network/Identify';

/**
 * @brief Renders a QR screen
 * @brief Fetches a string from server to render a qr-code from and store.
 * @brief Polls the server for when to identify.
 * @returns A QR screen
 */
function PersonQrScreens() {
    const [isLoadingQr, setLoadingQr] = React.useState(true);
    const [dataQRstring, setQr] = React.useState(null);
    let isPolling = false;

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
        let sessionId;
        try {
            sessionId = await SecureStore.getItemAsync('sessionId');
            await UpdateQrString(sessionId);
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
        console.log('Entered pollForIdentification');
        if (isPolling == true) {
            try {
                sessionId = await SecureStore.getItemAsync('sessionId');
                if (await PollForIdentification(sessionId)) {
                    isPolling = false;
                    result = await GoogleSignIn();
                    if (result.type === 'success') {
                        if ((await Identify(result.idToken)) == false) {
                            alert('Varification failed');
                        }
                    }
                    isPolling = true;
                }
                console.log('Polled via PollForIdentification');
            } catch (error) {
                console.error(error);
                alert('Pollfailed');
                getQrString();
            }
        } else {
            console.log('pollForIdentification paused');
        }
    };

    React.useEffect(() => {
        console.log('useeffect here');
        isPolling = true;
        console.log(isPolling);
        updateQrString();
    }, []);

    React.useEffect(() => {
        const timer = setInterval(() => {
            pollForIdentification();
            console.log('polling in PersonQrScreen');
        }, 1000);

        return () => {
            console.log('polling stopped');
            clearInterval(timer);
        };
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
