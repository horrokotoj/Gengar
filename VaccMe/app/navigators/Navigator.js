import React from 'react';
import Splash from '../screens/Splash';
import { AuthContext } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import PersonNavigator from './PersonNavigator';
import BusinessNavigator from './BusinessNavigator';
import * as SecureStore from 'expo-secure-store';
import GetSessionId from '../network/GetSessionId';
import DeleteItems from '../secureStore/DeleteItems';
import StoreItem from '../secureStore/StoreItems';
import GoogleSignIn from '../network/GoogleSignIn';
import UpdateCertificates from '../network/UpdateCertificates';

/**
 * @brief Creates an authorization context and an authorization container.
 * @brief Will check for a user stored in secure store.
 * @brief Will store a user in secure store on login and fetch a persons certificates from the server.
 * @returns PersonNavigator or AuthNavigator depending on Authcontext.
 */
function Navigator() {
    const [isLoading, setIsLoading] = React.useState(false);

    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userType: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userType: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userType: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userType: null,
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            setIsLoading(true);
            let userType;
            try {
                userType = await SecureStore.getItemAsync('userType');
            } catch (error) {
                console.error(error);
            }
            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN', token: userType });
            setIsLoading(false);
        };

        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(() => {
        return {
            signInPerson: async () => {
                setIsLoading(true);
                try {
                    const result = await GoogleSignIn();
                    console.log(result);
                    if (
                        result.type === 'success' &&
                        (await GetSessionId(result.idToken))
                    ) {
                        //gets a session id
                        await SecureStore.setItemAsync('userType', 'person');
                        //Stores relevant information on SecureStore
                        await StoreItem(result);
                        //Fetches the users certificates
                        let sessionId = await SecureStore.getItemAsync(
                            'sessionId'
                        );
                        await UpdateCertificates(sessionId);
                        console.log('request done');
                        setIsLoading(false);
                        dispatch({
                            type: 'SIGN_IN',
                            token: 'person',
                        });
                    } else {
                        setIsLoading(false);
                        dispatch({ type: 'SIGN_OUT' });
                    }
                } catch (error) {
                    console.log(error);
                    alert('Sign in failed, check internet connection.');
                    setIsLoading(false);
                    dispatch({ type: 'SIGN_OUT' });
                }
            },
            signInBusiness: async () => {
                setIsLoading(true);
                try {
                    const result = await GoogleSignIn();
                    console.log(result);
                    if (
                        result.type === 'success' &&
                        (await GetSessionId(result.idToken))
                    ) {
                        //Stores relevant information on SecureStore
                        await SecureStore.setItemAsync('userType', 'business');
                        //Stores relevant information on SecureStore
                        await StoreItem(result);
                        //gets a session id
                        setIsLoading(false);
                        dispatch({
                            type: 'SIGN_IN',
                            token: 'business',
                        });
                    } else {
                        setIsLoading(false);
                        dispatch({ type: 'SIGN_OUT' });
                    }
                } catch (e) {
                    setIsLoading(false);
                    dispatch({ type: 'SIGN_OUT' });
                }
            },
            signOut: () => {
                DeleteItems();
                dispatch({ type: 'SIGN_OUT' });
            },
        };
    }, []);

    if (isLoading) {
        return <Splash />;
    }

    function chooseNav() {
        if (state.userType === 'person') {
            return <PersonNavigator />;
        }
        if (state.userType === 'business') {
            return <BusinessNavigator />;
        } else {
            return <AuthNavigator />;
        }
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>{chooseNav()}</NavigationContainer>
        </AuthContext.Provider>
    );
}

export default Navigator;
