import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Linking,
} from "react-native";
import { styleSheets } from "../styleSheets/StyleSheets";
import QRCodeScanner from "../components/QRCodeScanner";

/**
 * @brief Renders a screen with a QR-code scanner for a business user
 * @returns A screen for a QR-code scanner
 */

function BusinessQRScannerScreen(props) {
  return (
    <ImageBackground
      style={styleSheets.background}
      source={require("../assets/background.jpg")}
    >
      <View styles={{ flex: 1 }}>
        <QRCodeScanner />
      </View>
    </ImageBackground>
  );
}
//{alert("QR-scanner will pop up here! :)")}
export default BusinessQRScannerScreen;
