import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//utils
import { simulateLoading } from "src/services/utils/simulateLoading";

//components
import Loading from "src/components/loading";

//screens
import ChooseModeScreen from "src/screens/ChooseMode";
import GetStartedScreen from "src/screens/GetStarted";

const { Screen, Navigator } = createNativeStackNavigator();

const StartNavigation: React.FC = () => {
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
                <Navigator
                    initialRouteName={isLoading ? "Loading" : "GetStarted"}
                    screenOptions={{ headerShown: false }}
                >
                    <Screen name="GetStarted" component={GetStartedScreen} />
                    <Screen name="ChooseMode" component={ChooseModeScreen} />
                </Navigator>
            )}
        </NavigationContainer>
    );
};

export default StartNavigation;
