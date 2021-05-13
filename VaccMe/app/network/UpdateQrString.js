import * as SecureStore from 'expo-secure-store';

/**
 * @brief Updates a users qr string
 * @param userID of the user to fetch qr string for.
 */
async function UpdateQrString(sessionId) {
    let response;
    console.log('requesting update qrString');
    try {
        response = await fetch('https://gengar.uxserver.se/getqr', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                session_id: '' + sessionId,
            }),
        });
        console.log(response.status);
        if (response.status === 401) {
            return false;
        }
        if (response.status === 200) {
            let json = await response.json();
            console.log(json);
            await SecureStore.setItemAsync('userQrString', json.qr_string);
        } else {
            await SecureStore.deleteItemAsync('userQrString');
        }
        return true;
    } catch (e) {
        await SecureStore.deleteItemAsync('userQrString');
        console.log('requesting update qrString failed');
        alert('Fetch failed, check internet connection');
        console.log(e);
        return true;
    }
}

export default UpdateQrString;
