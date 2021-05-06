import * as SecureStore from 'expo-secure-store';

/**
 * @brief Updates a users certificates
 * @param userID of the user to fetch certificates for.
 */
async function UpdateCertificates(userId) {
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
                googleuserid: '' + userId,
            }),
        });
        let json = await response.json();
        console.log(json);
        await SecureStore.setItemAsync('userCert', json);
    } catch (error) {
        console.log(error);
    }
}

export default UpdateCertificates;
