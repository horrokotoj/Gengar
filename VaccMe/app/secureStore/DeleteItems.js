import * as SecureStore from 'expo-secure-store';

/**
 * @brief Deletes items from SecureStore.
 */
function DeleteItems() {
    SecureStore.deleteItemAsync('userTokenPerson');
    SecureStore.deleteItemAsync('userTokenBusiness');
    SecureStore.deleteItemAsync('userCert');
    SecureStore.deleteItemAsync('userId');
    SecureStore.deleteItemAsync('userName');
}

export default DeleteItems;