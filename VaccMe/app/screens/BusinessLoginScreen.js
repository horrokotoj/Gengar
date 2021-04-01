import React from 'react';
import {
    ImageBackground,
    KeyboardAvoidingView,
    StyleSheet,
    View,
    Text,
    TextInput,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableHighlight,
} from 'react-native';

function BusinessLoginScreen({ navigation }) {
    const [text, onChangeText] = React.useState();
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground
                style={styles.background}
                source={require('../assets/background.jpg')}
            >
                <View style={styles.logo}>
                    <Text style={styles.name}>VaccMe</Text>
                    <Text style={styles.slogan}>
                        Ditt elektroniska vaccinationsintyg
                    </Text>
                    <Text style={styles.name}>Business</Text>
                </View>

                <View style={styles.filler} />

                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.keyboardAvoidingView}
                    keyboardVerticalOffset={keyboardVerticalOffset}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inner}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder="Username"
                            />

                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder="Password"
                            />

                            <TouchableHighlight
                                style={styles.touchableHighlight}
                                onPress={() => alert('TODO!')}
                            >
                                <Text style={styles.touchableHighlightText}>
                                    login
                                </Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={styles.touchableHighlight}
                                onPress={() => alert('TODO!')}
                            >
                                <Text style={styles.touchableHighlightText}>
                                    register
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styles.touchableHighlight}
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={styles.touchableHighlightText}>
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

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
    },
    name: {
        fontSize: 50,
        textDecorationLine: 'underline',
        color: 'yellow',
    },
    slogan: {
        fontSize: 15,
        color: 'black',
    },
    filler: {
        flex: 1,
    },
    keyboardAvoidingView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        width: 250,
        height: 50,
        margin: 5,
        opacity: 0.8,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        textAlign: 'center',
    },
    touchableHighlight: {
        width: 250,
        height: 50,
        backgroundColor: 'yellow',
        alignSelf: 'center',
        borderColor: 'black',
        margin: 5,
        borderWidth: 3,
        borderRadius: 50,
        justifyContent: 'center',
    },
    touchableHighlightText: {
        textAlign: 'center',
        fontSize: 20,
    },
});

export default BusinessLoginScreen;
