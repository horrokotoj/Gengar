/**
 * @brief Sends the idToken to identify.
 * @param idToken of the identified user.
 */
async function Identify(idToken) {
    let response;
    console.log('Identifying');
    try {
        response = await fetch('https://gengar.uxserver.se/reauth', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_token: '' + idToken,
            }),
        });
        console.log(response.response);
        let json = await response.json();
        if (json.successful === true) return true;
        else return false;
    } catch (error) {
        console.log(error);
    }
}

export default Identify;
