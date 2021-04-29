import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text } from 'react-native';
import { styleSheets } from '../styleSheets/StyleSheets';
import * as SecureStore from 'expo-secure-store';
import QRCode from 'react-native-qrcode-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';

// TODO: Replace with true get data from server
function getDataFromServer() {
    var json = { name: "John", age: 30, city: "New York" };
    //var string = JSON.stringify(json.age);
    return json;
}

/**
 * @brief Renders a QR screen
 * @returns A QR screen
 */
function PersonQrScreens(props) {
    const [isLoadingUrl, setLoadingUrl] = React.useState(true);
    const [dataQRstring, setData] = React.useState(null);

    //Fetching our data from the url
    React.useEffect(() => {
        const getQRData = async () => {
            try {
                let data = getDataFromServer();
                await SecureStore.setItemAsync('dataQRstring', data);
                setLoadingUrl(false);
                setData(data);
            } catch (error) {
                console.error(error);
            }
        }
        getQRData();
    }, []);

    return (
        <ImageBackground
            style={styleSheets.background}
            source={require('../assets/background.jpg')}
        >
            <SafeAreaView style={styleSheets.safe}>
{/*                 QRCode here */}
                {isLoadingUrl ? (
                    <Text>Loading url</Text>
                ) : (
                    <FlatList
                        data={dataQRstring}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>
                                {item.title}, {item.releaseYear}
                            </Text>
                        )}
                    />
                )}
            </SafeAreaView>
        </ImageBackground>
    );
}

export default PersonQrScreens;


/* 
<QRCode
//QR code value
value={ dataQRstring }
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
/>
 */



/* const getMoviesFromApiAsync = async () => {
    try {
        let response = await fetch(
            'http://10.0.2.2:8000/userdata/234385785823438578589'
        );
        let json = await response.json();
        setLoadingUrl(false);
        setData(json.dataQRstring);
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