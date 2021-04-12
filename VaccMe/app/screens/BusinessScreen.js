import React from "react";
import { Button, ImageBackground } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styleSheets } from "../styleSheets/StyleSheets";
import BusinessHomeScreen from "./BusinessHomeScreen";
import BusinessQRScannerScreen from "./BusinessQRScannerScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

const BusinessTab = createBottomTabNavigator();

/**
 * @brief Renders a screen for a business user
 * @param {*} navigation A navigation object
 * @returns A business screen
 */

function BusinessScreen({ navigation }) {
  return (
    <ImageBackground
      style={styleSheets.background}
      source={require("../assets/background.jpg")}
    >
      <BusinessTab.Navigator
        tabBarOptions={{
          activeTintColor: "#e91e63",
          labelStyle: {
            fontSize: 12,
          },
        }}
      >
        <BusinessTab.Screen
          name="Home"
          component={BusinessHomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <BusinessTab.Screen
          name="QR scanner"
          component={BusinessQRScannerScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="camera-outline" color={color} size={size} />
            ),
          }}
        />
      </BusinessTab.Navigator>
    </ImageBackground>
  );
}

export default BusinessScreen;
