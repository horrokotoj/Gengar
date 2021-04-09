import React from "react";
import { ImageBackground, View, Text, TouchableHighlight } from "react-native";
import { styleSheets } from "../styleSheets/StyleSheets";

// TODO: Extract hard coded strings from this file ex. vaccMe

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styleSheets.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styleSheets.logo}>
        <Text style={styleSheets.name}>VaccMe</Text>
        <Text style={styleSheets.slogan}>
          Ditt elektroniska vaccinationsintyg
        </Text>
      </View>

      <View style={styleSheets.filler} />

      <View style={styleSheets.keyboardAvoidingView}>
        <TouchableHighlight
          style={styleSheets.touchableHighlight}
          onPress={() => {
            navigation.navigate("PersonLoginScreen");
          }}
        >
          <Text style={styleSheets.touchableHighlightText}>Privatperson</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styleSheets.touchableHighlight}
          onPress={() => {
            navigation.navigate("BusinessLoginScreen");
          }}
        >
          <Text style={styleSheets.touchableHighlightText}> Företag </Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
