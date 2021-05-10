import React from 'react';
import {
    ImageBackground,
    KeyboardAvoidingView,
    View,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableHighlight,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import { AuthContext } from '../context/AuthContext';

/**
 * @brief Renders a login screen for a business user
 * @param {*} navigation A navigation object
 * @returns A login screen for business users
 */
function BusinessLoginScreen({ navigation }) {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    const { signInBusiness } = React.useContext(AuthContext);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground
                style={styleSheets.background}
                source={require('../assets/background.jpg')}
            >
                <View style={styleSheets.logo}>
                    <Text style={styleSheets.name}>VaccMe</Text>
                    <Text style={styleSheets.slogan}>
                        Ditt elektroniska vaccinationsintyg
                    </Text>
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={styleSheets.business}>Företag</Text>
                </View>

                <View style={styleSheets.filler} />

                <KeyboardAvoidingView
                    behavior="padding"
                    style={styleSheets.keyboardAvoidingView}
                    keyboardVerticalOffset={keyboardVerticalOffset}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styleSheets.inner}>
                            <TouchableHighlight
                                style={styleSheets.touchableHighlight}
                                onPress={() => signInBusiness()} // TODO: Business login!
                            >
                                <Text
                                    style={styleSheets.touchableHighlightText}
                                >
                                    Logga In
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styleSheets.touchableHighlight}
                                onPress={() => navigation.goBack()}
                            >
                                <Text
                                    style={styleSheets.touchableHighlightText}
                                >
                                    Tillbaka
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

export default BusinessLoginScreen;
