import React from 'react';
import { ImageBackground, TouchableWithoutFeedback, View } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

/**
 * @brief Renders an invalid screen
 * @returns A invalid screen
 */
function BusinessInvalidScreen({ navigation }) {
    return (
        <ImageBackground style={styleSheets.invalid}>
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <View style={styleSheets.validView}></View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
}

export default BusinessInvalidScreen;
