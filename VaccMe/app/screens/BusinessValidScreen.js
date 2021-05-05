import React from 'react';
import { ImageBackground, TouchableWithoutFeedback, View } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

/**
 * @brief Renders a valid screen
 * @returns A valid screen
 */
function BusinessValidScreen({ navigation }) {
    return (
        <ImageBackground style={styleSheets.valid}>
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

export default BusinessValidScreen;
