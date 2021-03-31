import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import PersonScreen from './app/screens/PersonScreen';
import HomeScreen from './app/screens/HomeScreen';
import MycertifacateScreen from './app/screens/MycertifacteScreen';

export default function App() {
    return (
        //<WelcomeScreen />
        <PersonScreen />
        //<HomeScreen />
        //<MycertifacateScreen />
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
