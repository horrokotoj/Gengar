
/**
 * @brief Makes a request to the server
 * @param address The end of the url address to make the request to
 * @param message The message to send in the body of the request
 * @returns The server reply as a string
 */
export async function RequestFromServer(address, message) {
    return await fetch('https://gengar.uxserver.se/' + address, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
}