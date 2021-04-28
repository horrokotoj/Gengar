import React from 'react';
import Splash from '../screens/Splash';
import { AuthContext } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import PersonNavigator from './PersonNavigator';
import BusinessNavigator from './BusinessNavigator';
import * as Google from 'expo-google-app-auth';
import * as SecureStore from 'expo-secure-store';

const config = {
    androidClientId:
        '821695412865-f6sndakvma08hqnjkqrjpmm7b2da2hmu.apps.googleusercontent.com',
    iosClientId:
        '821695412865-jlgaraciuvjk5j86ql00uf2ca0s5mmla.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
};

/**
 * @brief Creates an authorization context and an authorization container.
 * @brief Will check for a user stored in secure store.
 * @brief Will store a user in secure store on login.
 * @returns PersonNavigator or AuthNavigator depending on Authcontext.
 */
function Navigator() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN_PERSON':
                    return {
                        ...prevState,
                        userTokenPerson: action.token,
                        isLoading: false,
                    };
                case 'RESTORE_TOKEN_BUSINESS':
                    return {
                        ...prevState,
                        userTokenBusiness: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN_PERSON':
                    return {
                        ...prevState,
                        isSignout: false,
                        userTokenPerson: action.token,
                    };
                case 'SIGN_IN_BUSINESS':
                    return {
                        ...prevState,
                        isSignout: false,
                        userTokenBusiness: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userTokenPerson: null,
                        userTokenBusiness: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userTokenPerson: null,
            suerTokenBusiness: null,
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsyncPerson = async () => {
            let userTokenPerson;

            try {
                userTokenPerson = await SecureStore.getItemAsync(
                    'userTokenPerson'
                );
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN_PERSON', token: userTokenPerson });
        };

        bootstrapAsyncPerson();

        const bootstrapAsyncBusiness = async () => {
            let userTokenBusiness;

            try {
                userTokenBusiness = await SecureStore.getItemAsync(
                    'userTokenBusiness'
                );
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({
                type: 'RESTORE_TOKEN_BUSINESS',
                token: userTokenBusiness,
            });
        };

        bootstrapAsyncBusiness();
    }, []);

    const authContext = React.useMemo(() => {
        return {
            signInPerson: async () => {
                setIsLoading(true);
                //TODO: Should be implemented in a seperate file and called here.
                //Was not able to manipulate userToken with this in Autherizer.js
                try {
                    const result = await Google.logInAsync(config);
                    console.log(result);
                    if (result.type === 'success') {
                        await SecureStore.setItemAsync(
                            'userTokenPerson',
                            result.idToken
                        );
                        await SecureStore.setItemAsync(
                            'userId',
                            result.user.id
                        );
                        await SecureStore.setItemAsync(
                            'userName',
                            result.user.name
                        )
                        setIsLoading(false);
                        dispatch({
                            type: 'SIGN_IN_PERSON',
                            token: JSON.stringify(result),
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
            signInBusiness: async () => {
                setIsLoading(true);
                //TODO: Should be implemented in a seperate file and called here.
                //Was not able to manipulate userToken with this in Autherizer.js
                try {
                    const result = await Google.logInAsync(config);
                    console.log(result);
                    if (result.type === 'success') {
                        await SecureStore.setItemAsync(
                            'userTokenBusiness',
                            JSON.stringify(result)
                        );
                        setIsLoading(false);
                        dispatch({
                            type: 'SIGN_IN_BUSINESS',
                            token: JSON.stringify(result),
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
                SecureStore.deleteItemAsync('userTokenPerson');
                SecureStore.deleteItemAsync('userTokenBusiness');
                dispatch({ type: 'SIGN_OUT' });
            },
        };
    }, []);

    if (isLoading) {
        return <Splash />;
    }

    function chooseNav() {
        if (state.userTokenPerson) {
            //TODO: run some kind of function updating stored certificates.
            return <PersonNavigator />;
        }
        if (state.userTokenBusiness) {
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
