import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function DefaultButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "70%",
    height: 70,
    backgroundColor: "yellow",
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 50,
    top: "800%",
  },
  buttonText: {
    fontSize: 24,
    color: "black",
    fontFamily: "oswald-regular",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
