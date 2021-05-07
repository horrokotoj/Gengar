import * as SecureStore from 'expo-secure-store';

/**
 * @brief Validates a qrString and its certificate.
 * @param qrString to validate.
 * @param certificate to check for.
 */
async function ValidateQrString(qrString, certificate) {
    //TODO what variables should there be?
    let response;
    try {
        response = await fetch('http://192.168.1.46:8000/verify', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                //TODO change to correct variables.
                qr_string: '' + qrString,
                certificates_to_check: '' + certificate,
            }),
        });
        let json = await response.json();
        if (json.successful === true) {
            await SecureStore.setItemAsync('clientName', 'true');
        }
    } catch (e) {
        console.log(e);
    }
}

export default ValidateQrString;
