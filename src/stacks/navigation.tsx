import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//utils
import { simulateLoading } from "src/services/utils/simulateLoading";

//components
import Loading from "src/components/loading";

//screens
import ChooseModeScreen from "../screens/ChooseMode";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";
import GetStartedScreen from "../screens/GetStarted";
import SignInScreen from "../screens/SignIn";
import { AppTabsStack } from "src/components/tab-bar/BottomMenu";

const Stack = createStackNavigator();

const ChooseModeStack = () => (
    <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="ChooseMode" component={ChooseModeScreen} />
    </Stack.Navigator>
);

const LogonStack = () => (
    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
);

const Navigation = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const simulateLoadingAsync = async () => {
            await simulateLoading(3000);
            setIsLoading(false);
        };

        simulateLoadingAsync();
    }, []);

    return (
        <NavigationContainer>
            {isLoading ? (
                <Loading />
            ) : (
                <Stack.Navigator
                    initialRouteName={"ChooseModeStack"}
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen
                        name="ChooseModeStack"
                        component={ChooseModeStack}
                    />

                    <Stack.Screen name="LogonStack" component={LogonStack} />

                    <Stack.Screen
                        name="AppTabsStack"
                        component={AppTabsStack}
                    />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default Navigation;
