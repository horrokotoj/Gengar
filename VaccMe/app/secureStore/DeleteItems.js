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
    SecureStore.deleteItemAsync('userQrString');
}

export default DeleteItems;