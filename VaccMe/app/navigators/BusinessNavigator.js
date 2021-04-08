import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BusinessScreen from "../screens/BusinessScreen";

const BusinessStack = createStackNavigator();

function BusinessNavigator() {
  return (
    <BusinessStack.Navigator screenOptions={{ header: () => null }}>
      <BusinessStack.Screen name="BusinessScreen" component={BusinessScreen} />
    </BusinessStack.Navigator>
  );
}

export default BusinessNavigator;
