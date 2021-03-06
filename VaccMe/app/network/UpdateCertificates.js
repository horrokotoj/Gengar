import * as SecureStore from 'expo-secure-store';

/**
 * @brief Updates a users certificates
 * @param userID of the user to fetch certificates for.
 */
async function UpdateCertificates(sessionId) {
    let response;
    console.log('requesting update certificates');
    try {
        response = await fetch('https://gengar.uxserver.se/userdata', {
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
            await SecureStore.setItemAsync('userCert', JSON.stringify(json));
        }
        return true;
    } catch (error) {
        console.log('requesting update certificates failed');
        console.log(error);
        return true;
    }
}

export default UpdateCertificates;
