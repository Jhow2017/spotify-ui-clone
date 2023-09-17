import { StatusBar } from "expo-status-bar";
import ChooseMode from "src/screens/ChooseMode";
import GetStarted from "src/screens/GetStarted";
import Logon from "src/screens/Logon";

export default function App() {
    return (
        <>
            {/* <GetStarted /> */}
            <Logon />
            {/* <ChooseMode /> */}
            <StatusBar style="light" translucent />
        </>
    );
}
