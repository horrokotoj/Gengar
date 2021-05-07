import * as SecureStore from 'expo-secure-store';

/**
 * @brief Updates a users qr string
 * @param userID of the user to fetch qr string for.
 */
async function UpdateQrString(sessionId) {
    let response;
    try {
        response = await fetch('https://gengar.uxserver.se/getqr', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sessionid: '' + sessionId,
            }),
        });
        let json = await response.json();
        console.log(json);
        await SecureStore.setItemAsync('userQrString', userId);
    } catch (e) {
        console.log(e);
    }
}

export default UpdateQrString;
