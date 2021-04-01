import React from 'react';
import { Button, ImageBackground, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PersonHomeScreen from './PersonHomeScreen';
import PersonCertScreen from './PersonCertScreen';
import PersonQrScreen from './PersonQrScreen';
import PersonBookScreen from './PersonBookScreen';

const Tab = createBottomTabNavigator();

function PersonScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <Button
                title="back"
                onPress={() => {
                    navigation.goBack();
                }}
            />
            <Tab.Navigator>
                <Tab.Screen name="Home" component={PersonHomeScreen} />
                <Tab.Screen
                    name="MyCertificates"
                    component={PersonCertScreen}
                />
                <Tab.Screen name="QR" component={PersonQrScreen} />
                <Tab.Screen
                    name="Book vaccination"
                    component={PersonBookScreen}
                />
            </Tab.Navigator>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default PersonScreen;
