import * as SecureStore from 'expo-secure-store';

/**
 * @brief Updates a users qr string
 * @param userID of the user to fetch qr string for.
 */
async function UpdateQrString(sessionId) {
    let response;
    console.log('requesting update qrString');
    try {
        response = await fetch('http://192.168.1.46:8000/getqr', {
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
        if (response.status === 200) {
            let json = await response.json();
            console.log(json);
            await SecureStore.setItemAsync('userQrString', json.qr_string);
        }
    } catch (e) {
        console.log('requesting update qrString failed');
        console.log(e);
    }
}

export default UpdateQrString;
