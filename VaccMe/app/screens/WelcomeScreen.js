import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logo}>
                <Text style={styles.name}>VaccMe</Text>
                <Text style={styles.slogan}>
                    Ditt elektroniska vaccinationsintyg
                </Text>
            </View>

            <TouchableHighlight
                style={styles.person}
                onPress={() => {
                    navigation.navigate('PersonLoginScreen');
                }}
            >
                <Text style={styles.textPerson}>Privatperson</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.business}
                onPress={() => {
                    navigation.navigate('BusinessLoginScreen');
                }}
            >
                <Text style={styles.textBusiness}> Företag </Text>
            </TouchableHighlight>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    logo: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: '80%',
        alignItems: 'center',
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
    person: {
        width: '70%',
        height: 70,
        backgroundColor: 'yellow',
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 50,
        position: 'absolute',
        bottom: '25%',
        justifyContent: 'center',
    },
    business: {
        width: '70%',
        height: 70,
        backgroundColor: 'yellow',
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 50,
        position: 'absolute',
        bottom: '15%',
        justifyContent: 'center',
    },
    textPerson: {
        textAlign: 'center',
        fontSize: 20,
    },
    textBusiness: {
        textAlign: 'center',
        fontSize: 20,
    },
});

export default WelcomeScreen;
