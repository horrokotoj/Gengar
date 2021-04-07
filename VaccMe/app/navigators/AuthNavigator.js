import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import PersonLoginScreen from '../screens/PersonLoginScreen';
import BusinessLoginScreen from '../screens/BusinessLoginScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ header: () => null }}>
            <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <AuthStack.Screen
                name="PersonLoginScreen"
                component={PersonLoginScreen}
            />
            <AuthStack.Screen
                name="BusinessLoginScreen"
                component={BusinessLoginScreen}
            />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
