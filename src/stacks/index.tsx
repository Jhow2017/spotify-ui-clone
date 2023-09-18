import { SafeAreaProvider } from "react-native-safe-area-context";

import StartNavigation from "./start";

export function Routes() {
    return (
        <SafeAreaProvider>
            <StartNavigation />
        </SafeAreaProvider>
    );
}
