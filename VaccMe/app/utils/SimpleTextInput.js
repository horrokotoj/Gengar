import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const SimpleTextInput = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: "70%",
        height: 40,
        borderWidth: 1,
        borderRadius: 50,
        alignSelf: "center",

    },
});

export default SimpleTextInput;