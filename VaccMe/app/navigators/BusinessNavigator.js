import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BusinessHomeScreen from '../screens/BusinessHomeScreen';
import BusinessScanScreen from '../screens/BusinessScanScreen';
import BusinessValidScreen from '../screens/BusinessValidScreen';
import BusinessInvalidScreen from '../screens/BusinessInvalidScreen';

const BusinessStack = createStackNavigator();

/**
 * @brief Creates a stack navigator for business screen
 * @returns A stack navigator for business screen
 */
function BusinessNavigator() {
    return (
        <BusinessStack.Navigator screenOptions={{ header: () => null }}>
            <BusinessStack.Screen
                name="BusinessHomeScreen"
                component={BusinessHomeScreen}
            />
            <BusinessStack.Screen
                name="BusinessScanScreen"
                component={BusinessScanScreen}
            />
            <BusinessStack.Screen
                name="BusinessValidScreen"
                component={BusinessValidScreen}
            />
            <BusinessStack.Screen
                name="BusinessInvalidScreen"
                component={BusinessInvalidScreen}
            />
        </BusinessStack.Navigator>
    );
}

export default BusinessNavigator;
