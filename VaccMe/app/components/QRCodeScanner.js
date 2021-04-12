import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { styleSheets } from "../styleSheets/StyleSheets";

/**
 * @brief Renders a QR-code scanner for a business user
 * @returns A QR-code scanner
 */

function QRCodeScanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission == null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission == false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={[StyleSheet.absoluteFillObject, styleSheets.containerQR]}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableHighlight
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                margin: 50,
                color: "black",
                backgroundColor: "yellow",
              }}
              onPress={() => navigation.goBack()}
            >
              {" "}
              BACK{" "}
            </Text>
          </TouchableHighlight>
        </View>
      </BarCodeScanner>
      {scanned && (
        <TouchableHighlight>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              alignSelf: "center",
              marginTop: 70,
              color: "black",
            }}
            onPress={() => setScanned(false)}
          >
            {" "}
            Tap to Scan Again{" "}
          </Text>
        </TouchableHighlight>
      )}
    </SafeAreaView>
  );
}

export default QRCodeScanner;
