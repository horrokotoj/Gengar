import * as SecureStore from 'expo-secure-store';

/**
 * @brief Validates a qrString and its certificate.
 * @param qrString to validate.
 * @param certificate to check for.
 */
async function ValidateQrString(qrString, certificate) {
    let response;
    try {
        response = await fetch('http://192.168.1.46:8000/verify', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                googleuserid: '' + qrString,
                certificatestocheck: '' + certificate,
            }),
        });
        let json = await response.json();
        if (json.successful === true) {
            console.log('here2');
            await SecureStore.setItemAsync('clientName', 'true');
        }
    } catch (e) {
        console.log(e);
    }
}

export default ValidateQrString;
