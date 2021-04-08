import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Linking,
} from "react-native";
import { styleSheets } from "../styleSheets/StyleSheets";

function BusinessHomeScreen(props) {
  return (
    <ImageBackground
      style={styleSheets.background}
      source={require("../assets/background.jpg")}
    >
      <SafeAreaView style={styleSheets.safe}>
        <View style={styleSheets.tabSheet}>
          <Image
            style={styleSheets.vardguiden}
            source={require("../assets/Biggest ASSet.jpg")}
          ></Image>
        </View>
        <View style={styleSheets.filler}></View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default BusinessHomeScreen;
