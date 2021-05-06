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
import * as SecureStore from 'expo-secure-store';

/**
 * @brief Renders a QR-code scanner for a business user
 * @returns A QR-code scanner
 */
function BusinessScanScreen({ navigation }) {
    const [hasPermission, setHasPermission] = React.useState(null);
    const [certificate, setCertificate] = React.useState(null);
    const [isScanned, setScanned] = React.useState(false);
    const [replyData, setReplyData] = React.useState(null);

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

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        let reply;
        try {
            if (certificate == null) {
                alert('Need to choose certificate to validate.');
            } else {
                await ValidateQrString(data, certificate);
                reply = await SecureStore.getItemAsync('isValid');
                //console.log(reply);
                if (reply === 'true') {
                    //setReplyData(JSON.parse(reply).username); TODO: add username reply
                    //alert(replyData);
                    await SecureStore.deleteItemAsync('isValid');
                    setReplyData(null);
                    navigation.navigate('BusinessValidScreen');
                } else {
                    await SecureStore.deleteItemAsync('isValid');
                    setReplyData(null);
                    navigation.navigate('BusinessInvalidScreen');
                }
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
                    <BarCodeScanner
                        onBarCodeScanned={
                            isScanned ? undefined : handleBarCodeScanned
                        }
                        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                        style={styleSheets.scanner}
                    >
                        <View style={styleSheets.scanner} />
                    </BarCodeScanner>
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
                            navigation.goBack();
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
