import * as SecureStore from 'expo-secure-store';
import hasNetworkConnection from './NetworkConnection'

/**
 * @brief Validates a qrString and its certificate.
 * @param qrString to validate.
 * @param certificate to check for.
 */
async function ValidateQrString(qrString, certificate) {
    let response;
    console.log('requesting validate qrString');
    try {
        response = await fetch('https://gengar.uxserver.se/verify', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                qrstring: '' + qrString,
                certificatestocheck: '' + certificate,
            }),
        });
        let json = await response.json();
        if (json.successful === true) {
            await SecureStore.setItemAsync('isValid', 'true');
        }
    } catch (error) {
        console.log(error);
    }
}

export default ValidateQrString;
