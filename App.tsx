import { StatusBar } from "expo-status-bar";
import Navigation from "src/stacks/navigation";
import {
    useFonts,
    Inter_900Black,
    Inter_400Regular,
    Inter_700Bold,
    Inter_300Light,
} from "@expo-google-fonts/inter";

import "react-native-gesture-handler";
import Loading from "@components/loading";

export default function App() {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        Inter_400Regular,
        Inter_700Bold,
        Inter_300Light,
    });

    if (!fontsLoaded) {
        return <Loading />;
    }

    return (
        <>
            <StatusBar style="light" translucent />
            <Navigation />
        </>
    );
}
