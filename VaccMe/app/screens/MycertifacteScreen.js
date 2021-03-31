import React from 'react';

import { ImageBackground, StyleSheet, View, Text, SafeAreaView, Button} from 'react-native';

function MycertifacateScreen(props){

    return(<ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpg')}
        >

        <SafeAreaView>
            <Text style={styles.nameHeader}>VaccMe</Text>
            <Text style={styles.title}>Mina Intyg</Text>
            <View style={styles.whiteSquare}></View>
    
            <View style={styles.roundButton}>
                <Button
                    title="="
                ></Button>
            </View>

            <View style={[styles.button, styles.smallButton]}>
                    <Button
                        title="Lägg till nytt intyg"
                        color="black"
                    ></Button>
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
        backgroundColor: 'rgba(255,255,255, 0.9)',
        alignSelf: "center",
        borderWidth: 2,
    },
    roundButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'yellow',
        bottom: "50%",
        left: "70%",
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
        bottom: "15%",
    },
});

export default MycertifacateScreen;