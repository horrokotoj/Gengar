/**
 * @brief Sends a poll to check if the user should identify.
 * @param sessionId of the current session.
 */
async function PollForIdentification(sessionId) {
    let response;
    console.log('Polling For Identification');
    try {
        response = await fetch('https://gengar.uxserver.se/identifypolling', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sessionid: '' + sessionId,
            }),
        });
        let json = await response.json();
        console.log(json);
        if (json.identify === true) return true;
        else return false;
    } catch (error) {
        console.log(error);
    }
}

export default PollForIdentification;
