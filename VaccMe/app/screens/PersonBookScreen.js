import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function PersonBookScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        ></ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default PersonBookScreen;
