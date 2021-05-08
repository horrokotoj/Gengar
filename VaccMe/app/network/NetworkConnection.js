import NetInfo from "@react-native-community/netinfo";


const hasNetworkConnection = () => {
    NetInfo.fetch().then(networkState => {
        console.log("Is connected? - ", networkState.isConnected);
        return networkState.isConnected;
    });
};
export default hasNetworkConnection;

