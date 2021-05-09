import * as SecureStore from 'expo-secure-store';
import hasNetworkConnection from './NetworkConnection'
import RequestFromServer from './RequestFromServer'

/**
 * @brief Updates a users certificates
 * @param userID of the user to fetch certificates for.
 */
async function UpdateCertificates(userId) {
    let response;
    console.log('requesting update certificates');

    if (hasNetworkConnection()) { 
        try {
            response = await RequestFromServer(
                            'userdata',
                            { googleuserid: '' + userId });
            let json = await response.json();
            console.log(json);
            await SecureStore.setItemAsync('userCert', json);
        } catch (error) {
            alert('No server response');
            console.log(error); // TODO: Remove when implementation is done
        }
    } else {
        console.log('No internet connection');
    }
}

export default UpdateCertificates;
