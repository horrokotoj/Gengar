import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Linking,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { styleSheets } from "../styleSheets/StyleSheets";
import { AuthContext } from "../context/AuthContext";

/**
 * @brief Renders a home screen for a business user
 * @returns A home screen
 */

function BusinessHomeScreen(props) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ImageBackground
      style={styleSheets.background}
      source={require("../assets/background.jpg")}
    >
      <SafeAreaView style={styleSheets.safe}>
        <View style={styleSheets.tabSheet}></View>
        <View style={styleSheets.filler}>
          <TouchableHighlight
            style={styleSheets.touchableHighlight}
            onPress={() => signOut()}
          >
            <Text style={styleSheets.touchableHighlightText}>Logga ut</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default BusinessHomeScreen;
