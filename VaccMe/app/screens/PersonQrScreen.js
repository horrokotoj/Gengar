import React from 'react';
import { ImageBackground, SafeAreaView, View, Text } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import * as SecureStore from 'expo-secure-store';
import QRCode from 'react-native-qrcode-svg';
import UpdateQrString from '../network/UpdateQrString';
import PollForIdentification from '../network/PollForIdentification';
import GoogleSignIn from '../network/GoogleSignIn';
import Identify from '../network/Identify';
import { AuthContext } from '../context/AuthContext';

/**
 * @brief Renders a QR screen
 * @brief Fetches a string from server to render a qr-code from and store.
 * @brief Polls the server for when to identify.
 * @returns A QR screen
 */
function PersonQrScreens() {
    const { signOut } = React.useContext(AuthContext);
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
            } else {
                updateQrString();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateQrString = async () => {
        let sessionId;
        if (isPolling) {
            try {
                sessionId = await SecureStore.getItemAsync('sessionId');
                if (await UpdateQrString(sessionId)) {
                    console.log('Updated via UpdateQrString');
                    qrString = await SecureStore.getItemAsync('userQrString');
                    console.log(qrString); //TODO: Remove after debugging
                    if (qrString) {
                        setQr(qrString);
                        setLoadingQr(false);
                    } else {
                        setLoadingQr(true);
                        setQr(null);
                    }
                } else {
                    alert('Session expired');
                    signOut();
                }
            } catch (error) {
                console.error(error);
                setLoadingQr(true);
                setQr(null);
            }
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
                    setLoadingQr(true);
                    result = await GoogleSignIn();
                    if (result.type === 'success') {
                        if ((await Identify(result.idToken)) == false) {
                            alert('Varification failed');
                        }
                        setTimeout(() => {
                            updateQrString();
                        }, 2000);
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
        isPolling = true;
        updateQrString();
    }, []);

    React.useEffect(() => {
        const timerQr = setInterval(() => {
            updateQrString();
            console.log('updating QrString in interval');
        }, 1000 * 15);

        return () => {
            console.log('qrString interval stopped');
            clearInterval(timerQr);
        };
    }, []);

    //Initializes a polling
    React.useEffect(() => {
        const timerPoling = setInterval(() => {
            pollForIdentification();
            console.log('polling in PersonQrScreen');
        }, 1000);

        return () => {
            console.log('polling stopped');
            clearInterval(timerPoling);
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
                        <Text>Loading</Text>
                    ) : (
                        <QRCode
                            value={dataQRstring}
                            size={360}
                            style={styleSheets.qrCode}
                        />
                    )}
                </View>

                <View style={styleSheets.filler}></View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonQrScreens;
