import React from 'react';
import { Button, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styleSheets } from '../styleSheets/StyleSheets';
import PersonHomeScreen from './BusinessHomeScreen';
import PersonCertScreen from './PersonCertScreen';
import PersonQrScreen from './PersonQrScreen';
import PersonBookScreen from './PersonBookScreen';

const Tab = createBottomTabNavigator();

function BusinessScreen({ navigation }) {
    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <Button
                title="back"
                onPress={() => {
                    navigation.goBack();
                }}
            />
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#e91e63',
                    labelStyle: {
                        fontSize: 12,
                    },
                }}
            >
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

export default BusinessScreen;
