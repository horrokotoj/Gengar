import React from 'react';
import {
    Animated,
    ImageBackground,
    TouchableWithoutFeedback,
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { styleSheets } from '../styleSheets/StyleSheets';
import { Entypo } from '@expo/vector-icons';

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
                <View style={styleSheets.validView}>
                    <View>
                        <Entypo
                            style={{
                                marginTop: '50%',
                                alignSelf: 'center',
                            }}
                            name="circle-with-cross"
                            size={200}
                            color="#FF0201"
                        />
                    </View>
                    <Text style={styleSheets.validText}>
                        Vaccination ej giltig!
                    </Text>
                    <Text style={styleSheets.tapScreen}>
                        Tryck på skärmen för att gå tillbaka
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
}

export default BusinessInvalidScreen;
