import { StatusBar } from "expo-status-bar";

//screens
import ChooseMode from "src/screens/ChooseMode";
import GetStarted from "src/screens/GetStarted";
import Logon from "src/screens/Logon";
import SignIn from "src/screens/SignIn";

export default function App() {
    return (
        <>
            {/* <GetStarted /> */}
            {/* <ChooseMode /> */}
            {/* <Logon /> */}
            <SignIn />
            <StatusBar style="light" translucent />
        </>
    );
}
