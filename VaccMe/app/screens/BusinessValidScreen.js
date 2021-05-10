import React from 'react';
import {
    ImageBackground,
    TouchableWithoutFeedback,
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import { FontAwesome } from '@expo/vector-icons';

/**
 * @brief Renders a valid screen
 * @returns A valid screen
 */
function BusinessValidScreen({ navigation }) {
    return (
        <ImageBackground style={styleSheets.valid}>
            <SafeAreaView>
                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <View style={styleSheets.validView}>
                        <View>
                            <FontAwesome
                                style={{
                                    marginTop: '50%',
                                    alignSelf: 'center',
                                }}
                                name="check-circle"
                                size={200}
                                color="#7fff00"
                            />
                        </View>
                        <Text style={styleSheets.validText}>
                            Vaccination giltig!
                        </Text>
                        <Text style={styleSheets.tapScreen}>
                            Tryck på skärmen för att gå tillbaka
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default BusinessValidScreen;
