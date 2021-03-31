import React from 'react';
import { ImageBackground, StyleSheet, View, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpg')}
        >
            <View style={styles.logo}
            >
                <Text style={styles.name}>VaccMe</Text>
                <Text style={styles.slogan}>Ditt elektroniska vaccinationsintyg</Text>
            </View>
            
            <View style={styles.person}></View>
            <View style={styles.business}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    logo: {
        alignSelf: 'center',
        position: "absolute",
        bottom: "80%",
        alignItems: "center",
    },
    name: {
        fontSize: 50,
        textDecorationLine: 'underline',
        color: "yellow",
    },
    slogan: {
        fontSize: 15,
        color: "black",
    },
    person: {
        width: "70%",
        height: 70,
        backgroundColor: "yellow",
        alignSelf: "center",
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 50,
        position: "absolute",
        bottom: "25%",
    },
    business: {
        width: "70%",
        height: 70,
        backgroundColor: "yellow",
        alignSelf: "center",
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 50,
        position: "absolute",
        bottom: "15%",
    }
});

export default WelcomeScreen;