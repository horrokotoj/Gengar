import React, { useEffect, useState} from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import * as SecureStore from 'expo-secure-store';
import QRCode from 'react-native-qrcode-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';


/**
 * @brief Renders a QR screen
 * @returns A QR screen
 */
function PersonQrScreens(props) {
    const [isLoadingUrl, setLoadingUrl] = React.useState(true);
    const [dataQRstring, setQr] = React.useState(null);

    //Fetching our data from the url
    React.useEffect(() => {
        // Retrieving the user id to be sent to the server
        const getUserId = async () => {        
            let dataId;
            try {
                dataId = await SecureStore.getItemAsync('userId');
            } catch (e) {

            }
            setUserId(dataId);
        }

        getUserId(); 

        // Fetching the qrString from the server, adding it to secureStore
        const getQrString = async () => {
            let qrString;
            try {
                let response = await fetch(
                    'http://127.0.0.1:8000/getqr', {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          googleuserid: '234385785823438578589'         //TODO: userid är hårdkodad
                        }),
                      });
                let json = await response.json();
                await SecureStore.setItemAsync('userQR', json)
                console.log("done request and saved to secure store");  //TODO: Remove after debugging
                qrString = await SecureStore.getItemAsync('userQR');
                console.log(qrString);                                  //TODO: Remove after debugging
                setQr(JSON.parse(qrString).qrcode);
                setLoadingUrl(false);
            } catch (error) {
                console.error(error);
                qrString = await SecureStore.getItemAsync('userQR');
                console.log(qrString);
                setQr(JSON.parse(qrString).qrcode);
                setLoadingUrl(false);
            }
        };

        getQrString();
    }, []);

    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <SafeAreaView style={styleSheets.safe}>
            <Text>dataQRstring= {dataQRstring}</Text>
                {/* <QRCode
                    //QR code value
                    value={dataQRstring}
                    //size of QR Code
                    size={250}
                    //Color of the QR Code (Optional)
                    color="black"
                    //Background Color of the QR Code (Optional)
                    backgroundColor="white"
                    //Logo of in the center of QR Code (Optional)
                    //logo={{
                    //    url:
                    //        'https://www.iconfinder.com/icons/2924061/science_shot_srynge_vaccination_vaccine_icon',
                    //}}
                    //Center Logo size  (Optional)
                    logoSize={30}
                    //Center Logo margin (Optional)
                    logoMargin={2}
                    //Center Logo radius (Optional)
                    logoBorderRadius={15}
                    //Center Logo background (Optional)
                    logoBackgroundColor="white"
                    /> */}
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonQrScreens;



/* 
{isLoadingUrl ? (
    <Text>Loading url</Text>
) : (
    <FlatList
        data={dataQRstring}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
            <Text>
                {item.name}, {item.releaseYear}
            </Text>
        )}
    />
)}
 */
 

/* const getMoviesFromApiAsync = async () => {
    try {
        let response = await fetch(
            'http://10.0.2.2:8000/userdata/234385785823438578589'
        );
        let json = await response.json();
        setLoadingUrl(false);
        setQr(json.dataQRstring);
    } catch (error) {
        console.error(error);
    }
};

getMoviesFromApiAsync();
}, []); */


/* 
var obj = { name: "John", age: 30, city: "New York" };
JSON.stringify(obj) = to string;

JSON.parse() = to JSON;
 */