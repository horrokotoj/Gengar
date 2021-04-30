import * as SecureStore from 'expo-secure-store';

/**
 * @breif Updates a users qr string
 * @param userID of the user to fetch qr string for.
 */
async function UpdateQrString(userId) {
    let response;
    try {      
        response = await fetch(     //TODO fix propper request.
            'http://127.0.0.1:8000/userdata', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    googleuserid: "" + userId
                }),
                });
        let json = await response.json();
        await SecureStore.setItemAsync('userQrString', "https://svd.se"); //TODO replace url with reply from request
    } catch (e) {
        console.log(e);
    }
}

export default UpdateQrString;