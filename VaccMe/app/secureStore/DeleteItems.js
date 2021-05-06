import * as SecureStore from 'expo-secure-store';

/**
 * @brief Deletes items from SecureStore.
 */
async function DeleteItems() {
    await SecureStore.deleteItemAsync('userType');
    await SecureStore.deleteItemAsync('userCert');
    await SecureStore.deleteItemAsync('userId');
    await SecureStore.deleteItemAsync('userName');
    await SecureStore.deleteItemAsync('userQrString');
    await SecureStore.deleteItemAsync('certToValidate');
    await SecureStore.deleteItemAsync('isValid'); //defensive delete
    console.log('deleted');
}

export default DeleteItems;
