import React from "react";

import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  FlatList,
} from "react-native";

function MycertifacateScreen(props) {
  const FlatListCertificates = (
    <FlatList
      data={[
        { key: "Covid-19" },
        /* {
                key: <View style={styles.roundButton}>
                    <Button title="info"></Button>
                </View>
            }, */
        { key: "TBE" },
        { key: "Malaria" },
        { key: "Hepatit B" },
        { key: "Svininfluensa" },
      ]}
      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
    />
  );

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <SafeAreaView>
        <Text style={styles.nameHeader}>VaccMe</Text>
        <Text style={styles.title}>Mina Intyg</Text>
        <View style={styles.whiteSquare}>
          <View style={styles.container}>{FlatListCertificates}</View>

          <View style={styles.roundButton}>
            <Button title="="></Button>
          </View>

          <View style={styles.roundButton}>
            <Button title="="></Button>
          </View>

          <View style={styles.roundButton}>
            <Button title="="></Button>
          </View>

          <View style={[styles.button, styles.smallButton]}>
            <Button title="Lägg till nytt intyg" color="black"></Button>
          </View>
        </View>
      </SafeAreaView>
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
    fontWeight: "bold",
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
    height: "80%",
    backgroundColor: "rgba(255,255,255, 0.9)",
    alignSelf: "center",
    top: "20%",
    borderWidth: 2,
  },

  roundButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 10,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "yellow",
    /* bottom: "50%",
    left: "70%", */
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
    bottom: "10%",
  },

  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: "pink",
  },
  item: {
    padding: 15,
    fontSize: 24,
    height: 44,
    alignSelf: "flex-start",
  },
});

export default MycertifacateScreen;
