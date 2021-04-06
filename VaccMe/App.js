import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import PersonScreen from "./app/screens/PersonScreen";
import HomeScreen from "./app/screens/HomeScreen";
import MycertifacateScreen from "./app/screens/MycertifacteScreen";
import AppLoading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    "oswald-regular": require("./app/assets/fonts/Oswald-Bold.ttf"),
    "oswald-semibold": require("./app/assets/fonts/Oswald-SemiBold.ttf"),
    "oswald-bold": require("./app/assets/fonts/Oswald-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <WelcomeScreen />
      //<PersonScreen />
      //<HomeScreen />
      //<MycertifacateScreen />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
