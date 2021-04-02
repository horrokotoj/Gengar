import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

function PersonScreen(props) {
  const [text, onChangeText] = React.useState();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logo}>
          <Text style={styles.name}>VaccMe</Text>
          <Text style={styles.slogan}>Ditt elektroniska vaccinationsintyg</Text>
        </View>

        <View style={styles.filler} />

        <KeyboardAvoidingView
          behavior="padding"
          style={styles.keyboardAvoidingView}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Username"
              />

              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Password"
              />

              <View style={styles.login}>
                <Text> login </Text>
              </View>

              <View style={styles.register}>
                <Text> register </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  name: {
    fontSize: 50,
    textDecorationLine: "underline",
    color: "yellow",
  },
  slogan: {
    fontSize: 15,
    color: "black",
  },
  filler: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    width: 250,
    height: 50,
    margin: 5,
    opacity: 0.8,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    textAlign: "center",
  },
  login: {
    width: 250,
    height: 50,
    backgroundColor: "yellow",
    alignSelf: "center",
    borderColor: "black",
    margin: 5,
    borderWidth: 3,
    borderRadius: 50,
  },
  register: {
    width: 250,
    height: 50,
    backgroundColor: "yellow",
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 50,
  },
});

export default PersonScreen;
