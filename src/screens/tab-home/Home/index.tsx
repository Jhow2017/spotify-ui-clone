import { ScrollView } from "react-native";

//@Ds
import { DsFlex } from "@ds/layout";

//components
import Header from "src/components/header";
import LayoutPublic from "src/components/layout/layout-public";

const HomeScreen = () => {
    return (
        <ScrollView
            scrollEnabled
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            <LayoutPublic paddingBottom={74}>
                <Header />
                <DsFlex marginTop={80} flexDirection="column"></DsFlex>
            </LayoutPublic>
        </ScrollView>
    );
};

export default HomeScreen;
