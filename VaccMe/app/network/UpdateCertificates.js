import * as SecureStore from 'expo-secure-store';

/**
 * @brief Updates a users certificates
 * @param userID of the user to fetch certificates for.
 */
async function UpdateCertificates(sessionId) {
    let response;
    console.log(sessionId);
    console.log('Reustesing certs');
    try {
        response = await fetch('http://192.168.1.46:8000/userdata', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sessionid: '' + sessionId,
            }),
        });
        if (response.status === 200) {
            let json = await response.json();
            console.log(json);
            await SecureStore.setItemAsync('userCert', JSON.stringify(json));
        }
    } catch (e) {
        console.log('Requesting certs failed');
        console.log(e);
    }
}

export default UpdateCertificates;
