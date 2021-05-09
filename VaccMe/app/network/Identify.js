/**
 * @brief Sends the idToken to identify.
 * @param idToken of the identified user.
 */
async function Identify(idToken) {
    let response;
    console.log('Identifying');
    try {
        response = await fetch('https://gengar.uxserver.se/identifypolling', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idtoken: '' + idToken,
            }),
        });
    } catch (error) {
        console.log(error);
    }
}

export default Identify;
