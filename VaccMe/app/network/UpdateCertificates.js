import * as SecureStore from 'expo-secure-store';

/**
 * @brief Updates a users certificates
 * @param userID of the user to fetch certificates for.
 */
async function UpdateCertificates(sessionId) {
    let response;
    console.log('requesting update certificates');
    try {
        response = await fetch('http://192.168.1.46:8000/userdata', {
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
            await SecureStore.setItemAsync('userCert', JSON.stringify(json));
        }
    } catch (error) {
        console.log('requesting update certificates failed');
        console.log(error);
    }
}

export default UpdateCertificates;
