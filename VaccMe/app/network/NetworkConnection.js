import NetInfo from '@react-native-community/netinfo';

function hasNetworkConnection() {
    return NetInfo.fetch().then((networkState) => {
        return networkState.isConnected;
    });
}
export default hasNetworkConnection;
