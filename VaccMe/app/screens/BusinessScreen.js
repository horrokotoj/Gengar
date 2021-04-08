import React from "react";
import { Button, ImageBackground } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styleSheets } from "../styleSheets/StyleSheets";
import BusinessHomeScreen from "./BusinessHomeScreen";
import PersonCertScreen from "./PersonCertScreen";
import PersonQrScreen from "./PersonQrScreen";
import PersonBookScreen from "./PersonBookScreen";

const BusinessTab = createBottomTabNavigator();

function BusinessScreen({ navigation }) {
  return (
    <ImageBackground
      style={styleSheets.background}
      source={require("../assets/background.jpg")}
    >
      <Button
        title="back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <BusinessTab.Navigator
        tabBarOptions={{
          activeTintColor: "#e91e63",
          labelStyle: {
            fontSize: 12,
          },
        }}
      >
        <BusinessTab.Screen name="Home" component={BusinessHomeScreen} />
        {/* <Tab.Screen name="MyCertificates" component={PersonCertScreen} />
        <Tab.Screen name="QR" component={PersonQrScreen} />
        <Tab.Screen name="Book vaccination" component={PersonBookScreen} /> */}
      </BusinessTab.Navigator>
    </ImageBackground>
  );
}

export default BusinessScreen;
