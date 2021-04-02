import React from "react";

import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
} from "react-native";

function HomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <SafeAreaView>
        <Text style={styles.nameHeader}>VaccMe</Text>
        <Text style={styles.title}>Hem</Text>

        <View style={styles.whiteSquare}>
          <Text style={styles.rubric}>Kalender</Text>
          <View style={styles.horizontalLine}></View>
          <View style={[styles.button, styles.smallButton]}>
            <Button title="Lägg till i kalender" color="black"></Button>
          </View>
        </View>
      </SafeAreaView>
      <View style={[styles.button, styles.logoutButton]}>
        <Button title="Logga ut" color="black" fontWeight="bold"></Button>
      </View>
      <View style={[styles.button, styles.settingButton]}>
        <Button title="Inställningar" color="black"></Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  nameHeader: {
    // VaccMe name in corner
    fontSize: 24,
    fontFamily: "oswald-regular",
    color: "yellow",
    alignSelf: "flex-end",
    paddingTop: 45,
    right: 15,
    position: "absolute", // add if dont work with above
  },

  title: {
    // Title of the page
    fontSize: 40,
    fontFamily: "oswald-regular",
    color: "yellow",
    paddingTop: 100,
    alignSelf: "center",
    position: "absolute",
    alignItems: "center",
  },
  whiteSquare: {
    width: "80%",
    height: "70%",
    top: "20%",
    backgroundColor: "rgba(255,255,255, 0.9)",
    alignSelf: "center",
    borderWidth: 2,
  },
  rubric: {
    // the page rubric i.e "kalender"
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    paddingTop: 20,
    alignSelf: "center",
    position: "absolute",
    alignItems: "center",
  },
  horizontalLine: {
    // a seperator
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    top: "18%",
  },
  button: {
    width: "70%",
    height: 70,
    backgroundColor: "yellow",
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 50,
    position: "absolute",
  },
  smallButton: {
    width: "50%",
    height: 50,
    bottom: "15%",
  },
  logoutButton: {
    width: "50%",
    height: 50,
    bottom: "25%",
  },
  settingButton: {
    width: "50%",
    height: 50,
    bottom: "18%",
  },
});
export default HomeScreen;
