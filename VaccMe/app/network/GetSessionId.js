import * as SecureStore from 'expo-secure-store';

/**
 * @brief Gets a session ID from the server.
 * @param userID of the user to fetch certificates for.
 */
async function GetSessionId(idToken) {
    let response;
    try {
        response = await fetch('https://gengar.uxserver.se:8000/getsessionid', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idtoken: '' + idToken,
            }),
        });
        let json = await response.json();
        console.log(json.sessionid);
        await SecureStore.setItemAsync('sessionId', json.sessionid);
    } catch (e) {
        console.log(e);
    }
}

export default GetSessionId;
