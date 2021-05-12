import * as SecureStore from 'expo-secure-store';

/**
 * @brief Gets a session ID from the server.
 * @param userID of the user to fetch certificates for.
 */
async function GetSessionId(idToken) {
    console.log('Getting Session Id');
    let response;
    try {
        response = await fetch('https://gengar.uxserver.se/getsessionid', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_token: '' + idToken,
            }),
        });
        console.log(response.status);
        if (response.status === 401) {
            console.log('token validation failed');
            return false;
        }
        if (response.status === 200) {
            let json = await response.json();
            console.log(json);
            await SecureStore.setItemAsync('sessionId', json.session_id);
            return true;
        } else return false;
    } catch (e) {
        console.log('Getting Session Id failed');
        console.log(e);
        return false;
    }
}

export default GetSessionId;
