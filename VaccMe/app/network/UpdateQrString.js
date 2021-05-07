import * as SecureStore from 'expo-secure-store';

/**
 * @brief Updates a users qr string
 * @param userID of the user to fetch qr string for.
 */
async function UpdateQrString(userId) {
    let response;
    try {
        response = await fetch('http://192.168.1.46:8000/getqr', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                googleuserid: '' + userId,
            }),
        });
        console.log(response.status);
        if (response.status === 200) {
            let json = await response.json();
            console.log(json);
            await SecureStore.setItemAsync('userQrString', json.qr_string);
        }
    } catch (e) {
        console.log(e);
    }
}

export default UpdateQrString;
