import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
import PersonLoginScreen from '../screens/PersonLoginScreen';
import BusinessLoginScreen from '../screens/BusinessLoginScreen';
import PersonScreen from './PersonScreen';

const Stack = createStackNavigator();
// TODO: Replace with API function
//const [user, setUser] = null;

const AuthNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ header: () => null }}>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen
                    name="PersonLoginScreen"
                    component={PersonLoginScreen}
                />
                <Stack.Screen
                    name="BusinessLoginScreen"
                    component={BusinessLoginScreen}
                />
                <Stack.Screen name="PersonScreen" component={PersonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AuthNavigator;
