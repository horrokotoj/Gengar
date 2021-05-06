import * as SecureStore from 'expo-secure-store';
import hasNetworkConnection from './NetworkConnection'

/**
 * @brief Updates a users qr string
 * @param userID of the user to fetch qr string for.
 */
async function UpdateQrString(userId) {
    let response;
    try {
        response = await fetch('https://gengar.uxserver.se/getqr', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                googleuserid: '' + userId,
            }),
        });
        let json = await response.json();
        console.log(json);
        await SecureStore.setItemAsync('userQrString', userId);
    } catch (error) {
        console.log(error);
    }
}

export default UpdateQrString;
