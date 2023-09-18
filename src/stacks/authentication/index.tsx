import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import LogonScreen from "src/screens/Logon";
import SignInScreen from "src/screens/SignIn";
import RegisterScreen from "src/screens/Register";

const { Screen, Navigator } = createNativeStackNavigator();

const AuthenticationNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName={"Logon"}
                screenOptions={{ headerShown: false }}
            >
                <Screen name="Logon" component={LogonScreen} />
                <Screen name="SignIn" component={SignInScreen} />
                <Screen name="Register" component={RegisterScreen} />
            </Navigator>
        </NavigationContainer>
    );
};

export default AuthenticationNavigation;
