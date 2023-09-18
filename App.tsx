import { StatusBar } from "expo-status-bar";
import Navigation from "src/stacks/navigation";
import "react-native-gesture-handler";

export default function App() {
    return (
        <>
            <StatusBar style="light" translucent />
            <Navigation />
        </>
    );
}
