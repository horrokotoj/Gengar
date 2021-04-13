import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';

/**
 * @brief Renders a user certificate screen
 * @returns A certificate screen
 */

/* function MycertifacateScreen(props) {
    const FlatListCertificates = (
      <FlatList
        data={[
          { key: "Covid-19" },
          {
                  key: <View style={styles.roundButton}>
                      <Button title="info"></Button>
                  </View>
              },
          { key: "TBE" },
          { key: "Malaria" },
          { key: "Hepatit B" },
          { key: "Svininfluensa" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    );*/

function PersonCertScreen() {
    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <SafeAreaView style={styleSheets.safe}>
                <View style={styleSheets.logo}>
                    <Text style={styleSheets.name}>VaccMe</Text>
                </View>
                <View style={styleSheets.tabSheet}>
                    <Text style={styleSheets.tabSheetHeader}> Mina intyg </Text>
                </View>
                <View style={styleSheets.filler}>
                    <TouchableHighlight style={styleSheets.touchableHighlight}>
                        <Text style={styleSheets.touchableHighlightText}>
                            Lägg till intyg
                        </Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonCertScreen;
