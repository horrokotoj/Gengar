/**
 * @brief Validates a qrString and its certificate.
 * @param qrString to validate.
 * @param certificate to check for.
 */
async function ValidateQrString(qrString, certificate, sessionId) {
    let response;
    console.log(sessionId);
    console.log('requesting validate qrString');
    try {
        response = await fetch('https://gengar.uxserver.se/verify', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                qr_string: '' + qrString,
                certificates_to_check: '' + certificate,
                session_id: '' + sessionId,
            }),
        });
        console.log(response.stats);
        if (response.status === 401) {
            return 'exp_session';
        }
        if (response.status === 200) {
            let json = await response.json();
            console.log(json);
            if (json.successful === true) return 'true';
            else return 'false';
        }
        if (response.status === 400) {
            return 'exp_qr';
        }
        return null;
    } catch (e) {
        console.log(e);
    }
}

export default ValidateQrString;
