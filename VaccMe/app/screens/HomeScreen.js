import React from 'react';

import { ImageBackground, StyleSheet, View, Text, StatusBar, SafeAreaView} from 'react-native';

function HomeScreen(props) {
    return(<ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpg')}
        >

        <SafeAreaView> 
            <Text style={styles.nameHeader}>VaccMe</Text>
            <Text style={styles.title}>Hem</Text>

            <View style={styles.whiteSquare}>
                <View style={[styles.button, styles.smallButton]}>
                    <Text>Logga ut</Text>
                </View>
            </View>
        </SafeAreaView>
    
    </ImageBackground>)
    
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    nameHeader: {       // VaccMe name in corner
        fontSize: 24,
        fontWeight: 'bold',
        color: "yellow",
        alignSelf: 'flex-end',
        paddingTop: 45,
        right: 15,
        position: 'absolute', // add if dont work with above
    },

    title: {            // Title of the page
        fontSize: 40,
        fontWeight: 'bold',
        color: "yellow",
        paddingTop: 100,
        alignSelf: 'center',
        position: "absolute",
        alignItems: "center",
    },
    whiteSquare: {
        width: "80%",
        height: "80%",
        top: "20%",
        backgroundColor: "white",
        alignSelf: "center",
        borderWidth: 2,
    },
    button: {
        width: "70%",
        height: 70,
        backgroundColor: "yellow",
        alignSelf: "center",
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 50,
        position: "absolute",
    },    
    smallButton: {
        width: "50%",
        height: 50,
        backgroundColor: "yellow",
        alignSelf: "center",
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 50,
        position: "absolute",
    },

});
export default HomeScreen;