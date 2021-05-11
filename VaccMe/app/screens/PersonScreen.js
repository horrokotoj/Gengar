import React from 'react';
import { ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styleSheets } from '../styleSheets/StyleSheets';

import PersonCalendarScreen from '../screens/PersonCalendarScreen';
import PersonCertScreen from '../screens/PersonCertScreen';
import PersonQrScreen from '../screens/PersonQrScreen';
import PersonBookScreen from '../screens/PersonBookScreen';
import PersonSettingsScreen from '../screens/PersonSettingsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const PersonTab = createBottomTabNavigator();

function PersonScreen() {
    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <PersonTab.Navigator
                initialRouteName="QR"
                tabBarOptions={{
                    activeTintColor: '#e91e63',
                    labelStyle: {
                        fontSize: 12,
                    },
                }}
            >
                <PersonTab.Screen
                    name="Kalender"
                    component={PersonCalendarScreen}
                    options={{
                        unmountOnBlur: true,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="calendar"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <PersonTab.Screen
                    name="Mina intyg"
                    component={PersonCertScreen}
                    options={{
                        unmountOnBlur: true,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="receipt"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <PersonTab.Screen
                    name="QR"
                    component={PersonQrScreen}
                    style={styleSheets.qr}
                    options={{
                        unmountOnBlur: true,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="qr-code"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <PersonTab.Screen
                    name="Boka vaccin"
                    component={PersonBookScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="eyedrop"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <PersonTab.Screen
                    name="Inställningar"
                    component={PersonSettingsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="settings"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
            </PersonTab.Navigator>
        </ImageBackground>
    );
}

export default PersonScreen;
