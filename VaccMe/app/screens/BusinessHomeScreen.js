import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    View,
    ScrollView,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { styleSheets } from '../styleSheets/StyleSheets';
import { AuthContext } from '../context/AuthContext';
import * as SecureStore from 'expo-secure-store';

/**
 * @brief Renders a home screen for a business user
 * @returns A home screen
 */
function BusinessHomeScreen({ navigation }) {
    const { signOut } = React.useContext(AuthContext);
    const [pressed, setPressed] = React.useState(null);

    const addCert = async (cert) => {
        await SecureStore.setItemAsync('certToValidate', cert);
        setPressed(cert);
    };

    const removeCert = async () => {
        await SecureStore.deleteItemAsync('certToValidate');
        setPressed(null);
    };

    const getCertToValidate = async () => {
        let isPressed;
        try {
            isPressed = await SecureStore.getItemAsync('certToValidate');
            console.log(isPressed);
            if (isPressed == null) {
                setPressed(null);
            } else {
                setPressed(isPressed);
            }
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        getCertToValidate();
    }, []);

    function scan() {
        if (pressed) {
            navigation.navigate('BusinessScanScreen');
        } else {
            alert('Choose certificates to validate');
        }
    }

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
                    <ScrollView>
                        {pressed === 'cert1' ? (
                            <TouchableHighlight
                                style={styleSheets.touchableHighlightDark}
                                onPress={() => removeCert()}
                            >
                                <Text
                                    style={
                                        styleSheets.touchableHighlightTextLight
                                    }
                                >
                                    Cert 1
                                </Text>
                            </TouchableHighlight>
                        ) : (
                            <TouchableHighlight
                                style={styleSheets.touchableHighlight}
                                onPress={() => addCert('cert1')}
                            >
                                <Text
                                    style={styleSheets.touchableHighlightText}
                                >
                                    Cert 1
                                </Text>
                            </TouchableHighlight>
                        )}
                        {pressed === 'cert2' ? (
                            <TouchableHighlight
                                style={styleSheets.touchableHighlightDark}
                                onPress={() => removeCert()}
                            >
                                <Text
                                    style={
                                        styleSheets.touchableHighlightTextLight
                                    }
                                >
                                    Cert 2
                                </Text>
                            </TouchableHighlight>
                        ) : (
                            <TouchableHighlight
                                style={styleSheets.touchableHighlight}
                                onPress={() => addCert('cert2')}
                            >
                                <Text
                                    style={styleSheets.touchableHighlightText}
                                >
                                    Cert 2
                                </Text>
                            </TouchableHighlight>
                        )}
                        {pressed === 'cert3' ? (
                            <TouchableHighlight
                                style={styleSheets.touchableHighlightDark}
                                onPress={() => removeCert()}
                            >
                                <Text
                                    style={
                                        styleSheets.touchableHighlightTextLight
                                    }
                                >
                                    Cert 3
                                </Text>
                            </TouchableHighlight>
                        ) : (
                            <TouchableHighlight
                                style={styleSheets.touchableHighlight}
                                onPress={() => addCert('cert3')}
                            >
                                <Text
                                    style={styleSheets.touchableHighlightText}
                                >
                                    Cert 3
                                </Text>
                            </TouchableHighlight>
                        )}
                    </ScrollView>
                    <View>
                        <TouchableHighlight
                            style={styleSheets.touchableHighlight}
                            onPress={() => scan()}
                        >
                            <Text style={styleSheets.touchableHighlightText}>
                                Scan
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styleSheets.filler}>
                    <TouchableHighlight
                        style={styleSheets.touchableHighlight}
                        onPress={() => signOut()}
                    >
                        <Text style={styleSheets.touchableHighlightText}>
                            Logga ut
                        </Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default BusinessHomeScreen;
