import * as SecureStore from 'expo-secure-store';
import hasNetworkConnection from './NetworkConnection'
import RequestFromServer from './RequestFromServer'

/**
 * @brief Updates a users qr string
 * @param userID of the user to fetch qr string for.
 */
async function UpdateQrString(userId) {
    let response;
    console.log('requesting update qrString');

    if (hasNetworkConnection()) {
        try {
            response = await RequestFromServer(
                            'getqr',
                            { googleuserid: '' + userId });
            let json = await response.json();
            console.log(json);
            await SecureStore.setItemAsync(
                'userQrString',
                JSON.parse(json).qr_string
            );
        } catch (error) {
            alert('No server response');
            console.log(error);
        }
    } else {
        console.log('No internet connection');
    }    
}

export default UpdateQrString;
