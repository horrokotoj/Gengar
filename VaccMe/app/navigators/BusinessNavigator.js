import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BusinessScreen from "../screens/BusinessScreen";
import QRCodeScanner from "../components/QRCodeScanner";

const BusinessStack = createStackNavigator();

/**
 * @brief Creates a stack navigator for business screen
 * @returns A stack navigator for business screen
 */

function BusinessNavigator() {
  return (
    <BusinessStack.Navigator screenOptions={{ header: () => null }}>
      <BusinessStack.Screen name="BusinessScreen" component={BusinessScreen} />
      <BusinessStack.Screen name="QRCodeScanner" component={QRCodeScanner} />
    </BusinessStack.Navigator>
  );
}

export default BusinessNavigator;
