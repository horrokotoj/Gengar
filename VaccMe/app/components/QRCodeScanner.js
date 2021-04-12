import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { styleSheets } from "../styleSheets/StyleSheets";

/**
 * @brief Renders a QR-code scanner for a business user
 * @returns A QR-code scanner
 */

function QRCodeScanner(props) {
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
    alert("Bar code with type ${type} and data ${data} has been scanned!");
  };

  if (hasPermission == null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission == false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styleSheets.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

export default QRCodeScanner;
