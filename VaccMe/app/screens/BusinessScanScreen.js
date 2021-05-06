import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableHighlight,
    ImageBackground,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styleSheets } from '../styleSheets/StyleSheets';
import ValidateQrString from '../network/ValidateQrString';
import PollForVerification from '../network/PollForVerification';
import * as SecureStore from 'expo-secure-store';

/**
 * @brief Renders a QR-code scanner for a business user
 * @returns A QR-code scanner
 */
function BusinessScanScreen({ navigation }) {
    const [hasPermission, setHasPermission] = React.useState(null);
    const [certificate, setCertificate] = React.useState(null);
    const [isScanned, setScanned] = React.useState(false);
    const [isPolling, setIsPolling] = React.useState(false);
    const [pollTimer, setPollTimer] = React.useState(null);

    const getCert = async () => {
        let cert;
        try {
            cert = await SecureStore.getItemAsync('certToValidate');
            console.log(cert);
            setCertificate(cert);
        } catch (e) {
            console.error(e);
        }
    };

    React.useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
            await getCert();
        })();
    }, []);

    const pollForVerification = async () => {
        let sessionId;
        let poll;
        try {
            sessionId = await SecureStore.getItem('sessionId');
            if (sessionId) {
                poll = await PollForVerification(sessionId);
                if (poll === 'true') {
                    clearInterval(pollTimer);
                    setIsPolling(false);
                    navigation.navigate('BusinessValidScreen');
                }
                if (poll === 'failed') {
                    clearInterval(pollTimer);
                    setIsPolling(false);
                    navigation.navigate('BusinessInvalidScreen');
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        if (isPolling == true) {
            const timer = setInterval(() => {
                setPollTimer(timer);
                //pollForVerification();
                console.log('Poll BusinessScanScreen');
            }, 1000);
        }
    }, [isPolling, true]);

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        try {
            if (certificate == null) {
                alert('Need to choose certificate to validate.');
            } else {
                if (await ValidateQrString(data, certificate)) {
                    setIsPolling(true);
                } else {
                    navigation.navigate('BusinessInvalidScreen');
                }
            }
        } catch (e) {
            console.error(e);
        }
    };

    if (hasPermission == null) {
        return <Text>Requesting for camera permission</Text>;
    }

    if (hasPermission == false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <SafeAreaView style={styleSheets.scanner}>
                <View style={styleSheets.scannerView}>
                    {isPolling ? (
                        <Text
                            style={{
                                alignSelf: 'center',
                            }}
                        >
                            Väntar på identifiering
                        </Text>
                    ) : (
                        <BarCodeScanner
                            onBarCodeScanned={
                                isScanned ? undefined : handleBarCodeScanned
                            }
                            barCodeTypes={[
                                BarCodeScanner.Constants.BarCodeType.qr,
                            ]}
                            style={styleSheets.scanner}
                        >
                            <View style={styleSheets.scanner} />
                        </BarCodeScanner>
                    )}
                </View>
                <View style={styleSheets.cancelButtonView}>
                    {isScanned == false ? undefined : (
                        <TouchableHighlight
                            style={styleSheets.touchableHighlight}
                            onPress={() => {
                                setScanned(false);
                            }}
                        >
                            <Text style={styleSheets.touchableHighlightText}>
                                Återställ
                            </Text>
                        </TouchableHighlight>
                    )}
                    <TouchableHighlight
                        style={styleSheets.touchableHighlight}
                        onPress={() => {
                            if (isPolling) {
                                clearInterval(pollTimer);
                                setScanned(false);
                                setIsPolling(false);
                            } else {
                                navigation.goBack();
                            }
                        }}
                    >
                        <Text style={styleSheets.touchableHighlightText}>
                            Avbryt
                        </Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default BusinessScanScreen;
