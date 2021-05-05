import * as SecureStore from 'expo-secure-store';

/**
 * @breif Stores items in secure store.
 * @param token from which items will be stored.
 */
export default async function StoreItems(token) {
    await SecureStore.setItemAsync('userTokenPerson', token.idToken);
    await SecureStore.setItemAsync('userId', token.user.id);
    await SecureStore.setItemAsync('userName', token.user.name);
}
