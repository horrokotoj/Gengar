import * as SecureStore from 'expo-secure-store';
import hasNetworkConnection from './NetworkConnection'

/**
 * @brief Validates a qrString and its certificate.
 * @param qrString to validate.
 * @param certificate to check for.
 */
async function ValidateQrString(qrString, certificate) {
    let response;
    console.log('requesting validate qrString');

    if (hasNetworkConnection()) { 
        try {
            response = await RequestFromServer(
                            'verify',
                            {   qrstring: '' + qrString,
                                certificatestocheck: '' + certificate});
            let json = await response.json();
            if (json.successful === true) {
                await SecureStore.setItemAsync('isValid', 'true');
            }
        } catch (error) {
            alert('No server response');            
            console.log(error);
        }
    } else {
        console.log('No internet connection');        
    }
}

export default ValidateQrString;
