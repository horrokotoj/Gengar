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
import Camera from "../components/Camera";
import QRCodeScanner from "../components/QRCodeScanner";

// go to the android/app/src/main/AndroidManifest.xml file and add‍
//<uses-permission android:name="android.permission.CAMERA"></uses-permission>

function BusinessCameraScreen(props) {
  return (
    <ImageBackground
      style={styleSheets.background}
      source={require("../assets/background.jpg")}
    >
      <SafeAreaView styles={{ flex: 1 }}>
        <QRCodeScanner />
      </SafeAreaView>
    </ImageBackground>
  );
}

export default BusinessCameraScreen;
