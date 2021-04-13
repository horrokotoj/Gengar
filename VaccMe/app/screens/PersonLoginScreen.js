import React from 'react';
import {
    ImageBackground,
    KeyboardAvoidingView,
    View,
    Text,
    TextInput,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableHighlight,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import { AuthContext } from '../context/AuthContext';

function PersonLoginScreen({ navigation }) {
    const [text, onChangeText] = React.useState();
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    const { signIn } = React.useContext(AuthContext);

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

                <View style={styleSheets.filler} />

                <KeyboardAvoidingView
                    behavior="padding"
                    style={styleSheets.keyboardAvoidingView}
                    keyboardVerticalOffset={keyboardVerticalOffset}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styleSheets.inner}>
                            <TextInput
                                style={styleSheets.input}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder="Username"
                            />

                            <TextInput
                                style={styleSheets.input}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder="Password"
                            />

                            <TouchableHighlight
                                style={styleSheets.touchableHighlight}
                                onPress={() => signIn()}
                            >
                                <Text
                                    style={styleSheets.touchableHighlightText}
                                >
                                    login
                                </Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={styleSheets.touchableHighlight}
                                onPress={() => alert('TODO!')}
                            >
                                <Text
                                    style={styleSheets.touchableHighlightText}
                                >
                                    register
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styleSheets.touchableHighlight}
                                onPress={() => navigation.goBack()}
                            >
                                <Text
                                    style={styleSheets.touchableHighlightText}
                                >
                                    back
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}
export default PersonLoginScreen;
