import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableHighlight,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import PersonCalendarScreen from '../screens/PersonCalendarScreen';

function TestScreen({ route, navigation }) {
    const { type, givenName } = route.params;

    return (
        <SafeAreaView>
            <Text>{type}</Text>
            <Text>{givenName}</Text>
        </SafeAreaView>
    );
}

export default TestScreen;
