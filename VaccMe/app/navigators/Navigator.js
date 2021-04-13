import React from 'react';
import Splash from '../screens/Splash';
import { AuthContext } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import PersonNavigator from './PersonNavigator';


/**
 * @brief Creates an authorization context and an authorization container. 
 * @returns PersonNavigator or AuthNavigator depending on Authcontext.
 */
function Navigator() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const authContext = React.useMemo(() => {
        return {
            signIn: () => {
                setIsLoading(false);
                setUserToken('something');
            },
            signOut: () => {
                setIsLoading(false);
                setUserToken(null);
            },
        };
    }, []);

    if (isLoading) {
        return <Splash />;
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {userToken ? <PersonNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default Navigator;
