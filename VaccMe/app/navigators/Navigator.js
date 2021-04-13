import React from 'react';
import Splash from '../screens/Splash';
import { AuthContext } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import PersonNavigator from './PersonNavigator';
import BusinessNavigator from './BusinessNavigator';
import * as Google from 'expo-google-app-auth';

const config = {
    androidClientId:
        '821695412865-f6sndakvma08hqnjkqrjpmm7b2da2hmu.apps.googleusercontent.com',
    iosClientId:
        '821695412865-jlgaraciuvjk5j86ql00uf2ca0s5mmla.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
};

/**
 * @brief Creates an authorization context and an authorization container.
 * @returns PersonNavigator or AuthNavigator depending on Authcontext.
 */
function Navigator() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [personToken, setPersonToken] = React.useState(null);
    const [businessToken, setBusinessToken] = React.useState(null);

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
                        setIsLoading(false);
                        setPersonToken(result.user.email);
                    } else {
                        setIsLoading(false);
                        setPersonToken(null);
                    }
                } catch (e) {
                    setIsLoading(false);
                    setPersonToken(null);
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
                        setIsLoading(false);
                        setBusinessToken(result.user.email);
                    } else {
                        setIsLoading(false);
                        setBusinessToken(null);
                    }
                } catch (e) {
                    setIsLoading(false);
                    setBusinessToken(null);
                }
            },
            signOut: () => {
                setPersonToken(null);
                setBusinessToken(null);
            },
        };
    }, []);

    if (isLoading) {
        return <Splash />;
    }

    function chooseNav() {
        if (personToken) {
            return <PersonNavigator />;
        }
        if (businessToken) {
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
