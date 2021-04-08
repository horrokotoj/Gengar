import React from "react";
import Splash from "../screens/Splash";
import { AuthContext } from "../context/AuthContext";
import AuthNavigator from "./AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import BusinessNavigator from "./BusinessNavigator";

function Navigator2() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [businessToken, setBusinessToken] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const authContext = React.useMemo(() => {
    return {
      signInBusiness: () => {
        setIsLoading(false);
        setBusinessToken("something");
      },
      signOutBusiness: () => {
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
        {businessToken ? <BusinessNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default Navigator2;
