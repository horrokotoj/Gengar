import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableHighlight,
    ImageBackground,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styleSheets } from '../styleSheets/StyleSheets';
import ValidateQrString from '../network/ValidateQrString';
import * as SecureStore from 'expo-secure-store';
import { Audio } from 'expo-av';
import { AuthContext } from '../context/AuthContext';

/**
 * @brief Renders a QR-code scanner for a business user
 * @brief Polls the server with the scanned qr-code for a validation
 * @returns A QR-code scanner
 */
function BusinessScanScreen({ navigation }) {
    const { signOut } = React.useContext(AuthContext);
    const [hasPermission, setHasPermission] = React.useState(null);
    const [certificate, setCertificate] = React.useState(null);
    const [qrString, setQrString] = React.useState(null);
    const [isScanned, setScanned] = React.useState(false);
    const [isPolling, setIsPolling] = React.useState(false);
    const [pollTimer, setPollTimer] = React.useState(null);
    const [sound, setSound] = React.useState();
    const [sessionId, setSessionId] = React.useState(null);

    async function playSoundValid() {
        console.log('Loading Sound 1');
        const { sound } = await Audio.Sound.createAsync(
            require('../audio/valid.mp3')
        );
        setSound(sound);

        console.log('Playing Sound 1');
        await sound.playAsync();
    }

    async function playSoundInvalid() {
        console.log('Loading Sound 2');
        const { sound } = await Audio.Sound.createAsync(
            require('../audio/invalid.mp3')
        );
        setSound(sound);

        console.log('Playing Sound 2');
        await sound.playAsync();
    }

    const getCert = async () => {
        let cert;
        try {
            cert = await SecureStore.getItemAsync('certToValidate');
            console.log(cert);
            setCertificate(cert);
        } catch (error) {
            console.error(error);
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
        let poll;
        let sessionId;
        try {
            sessionId = await SecureStore.getItemAsync('sessionId');
            console.log(sessionId);
            poll = await ValidateQrString(qrString, certificate, sessionId);
            if (poll === 'exp_session') {
                setIsPolling(false);
                alert('Session expired');
                signOut();
            }
            if (poll === 'true') {
                setIsPolling(false);
                setScanned(false);
                setQrString(null);
                playSoundValid();
                navigation.navigate('BusinessValidScreen');
            }
            if (poll === 'false') {
                setIsPolling(false);
                setScanned(false);
                setQrString(null);
                playSoundInvalid();
                navigation.navigate('BusinessInvalidScreen');
            }
            if (poll === 'exp_qr') {
                alert('Qr-code has expired');
                clearInterval(pollTimer);
                setScanned(false);
                setIsPolling(false);
                setQrString(null);
            }
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        if (isPolling == true) {
            const timer = setInterval(() => {
                setPollTimer(timer);
                pollForVerification();
                console.log('Poll BusinessScanScreen');
            }, 1000);
        }
        if (isPolling == false) {
            clearInterval(pollTimer);
        }
        return () => {
            clearInterval(pollTimer);
        };
    }, [isPolling, true]);
    React.useEffect(() => {
        return sound
            ? () => {
                  console.log('Unloading Sound');
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        try {
            if (certificate == null) {
                alert('Need to choose certificate to validate.');
            } else {
                console.log(data);
                setQrString(data);
                setIsPolling(true);
            }
        } catch (error) {
            console.error(error);
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
                            style={
                                (styleSheets.logo,
                                {
                                    alignSelf: 'center',
                                })
                            }
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
                                setQrString(null);
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
