import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BusinessScreen from '../screens/BusinessScreen';
import BusinessCertScanned from '../screens/BusinessCertScanned';

const BusinessStack = createStackNavigator();

/**
 * @brief Creates a stack navigator for business screen
 * @returns A stack navigator for business screen
 */
function BusinessNavigator() {
    return (
        <BusinessStack.Navigator screenOptions={{ header: () => null }}>
            <BusinessStack.Screen
                name="BusinessScreen"
                component={BusinessScreen}
            />
            <BusinessStack.Screen
                name="BusinessCertScanned"
                component={BusinessCertScanned}
            />
        </BusinessStack.Navigator>
    );
}

export default BusinessNavigator;
