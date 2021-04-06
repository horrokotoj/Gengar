import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PersonScreen from '../screens/PersonScreen';

const PersonStack = createStackNavigator();

function PersonNavigator() {
    return (
        <PersonStack.Navigator screenOptions={{ header: () => null }}>
            <PersonStack.Screen name="PersonScreen" component={PersonScreen} />
        </PersonStack.Navigator>
    );
}

export default PersonNavigator;
