import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
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
                    <Text style={[styleSheets.name, styleSheets.screenName]}>
                        VaccMe
                    </Text>
                </View>
                <View style={styleSheets.tabSheet}>
                    <View style={styleSheets.container}>
                        <ScrollView>
                            {pressed === 'cert1' ? (
                                <TouchableOpacity
                                    style={[
                                        styleSheets.scrollItem,
                                        styleSheets.scrollItemPressed,
                                    ]}
                                    onPress={() => removeCert()}
                                >
                                    <Text style={styleSheets.text}>Cert 1</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    style={styleSheets.scrollItem}
                                    onPress={() => addCert('cert1')}
                                >
                                    <Text style={styleSheets.text}>Cert 1</Text>
                                </TouchableOpacity>
                            )}
                            {pressed === 'cert2' ? (
                                <TouchableOpacity
                                    style={[
                                        styleSheets.scrollItem,
                                        styleSheets.scrollItemPressed,
                                    ]}
                                    onPress={() => removeCert()}
                                >
                                    <Text style={styleSheets.text}>Cert 2</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    style={styleSheets.scrollItem}
                                    onPress={() => addCert('cert2')}
                                >
                                    <Text style={styleSheets.text}>Cert 2</Text>
                                </TouchableOpacity>
                            )}
                            {pressed === 'cert3' ? (
                                <TouchableOpacity
                                    style={[
                                        styleSheets.scrollItem,
                                        styleSheets.scrollItemPressed,
                                    ]}
                                    onPress={() => removeCert()}
                                >
                                    <Text style={styleSheets.text}>Cert 3</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    style={styleSheets.scrollItem}
                                    onPress={() => addCert('cert3')}
                                >
                                    <Text style={styleSheets.text}>Cert 3</Text>
                                </TouchableOpacity>
                            )}
                            {pressed === 'cert4' ? (
                                <TouchableOpacity
                                    style={[
                                        styleSheets.scrollItem,
                                        styleSheets.scrollItemPressed,
                                    ]}
                                    onPress={() => removeCert()}
                                >
                                    <Text style={styleSheets.text}>Cert 4</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    style={styleSheets.scrollItem}
                                    onPress={() => addCert('cert4')}
                                >
                                    <Text style={styleSheets.text}>Cert 4</Text>
                                </TouchableOpacity>
                            )}
                        </ScrollView>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styleSheets.scan}
                            onPress={() => scan()}
                        >
                            <Text style={styleSheets.scanText}>Skanna</Text>
                        </TouchableOpacity>
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
