/**
 * @brief Validates a qrString and its certificate.
 * @param qrString to validate.
 * @param certificate to check for.
 */
async function ValidateQrString(qrString, certificate) {
    //TODO what variables should there be?
    let response;
    console.log('requesting validate qrString');
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
        console.log(response.stats);
        if (response.status === 200) {
            let json = await response.json();
            console.log(json);
            if (json.successful === true) return 'true';
            else return 'false';
        }
        if (response.status === 202) return null;
    } catch (e) {
        console.log(e);
    }
}

export default ValidateQrString;
