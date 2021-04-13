import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PersonScreen from '../screens/PersonScreen';

const PersonStack = createStackNavigator();

/**
 * @brief Creates a stack navigator for user screen
 * @returns A stack navigator for user screen
 */
function PersonNavigator() {
    return (
        <PersonStack.Navigator screenOptions={{ header: () => null }}>
            <PersonStack.Screen name="PersonScreen" component={PersonScreen} />
        </PersonStack.Navigator>
    );
}

export default PersonNavigator;
