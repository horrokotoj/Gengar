/**
 * @brief Sends a poll to check if the user should identify.
 * @param sessionId of the current session.
 */
async function PollForIdentification(sessionId) {
    let response;
    console.log('Polling For Identification');
    try {
        response = await fetch('https://gengar.uxserver.se/poll', {
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
            console.log('Unauthorized poll');
        }
        if (response.status === 200) {
            let json = await response.json();
            console.log(json);
            if (json.successful === true) return true;
            else return false;
        } else return false;
    } catch (error) {
        console.log(error);
    }
}

export default PollForIdentification;
