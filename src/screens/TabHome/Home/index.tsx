import { ScrollView } from "react-native";

//@Ds
import { DsFlex } from "@ds/layout";

//components
import Header from "src/components/header";
import LayoutPublic from "src/components/layout/layout-public";
import { DsText } from "@ds/components/typography";

const HomeScreen = () => {
    return (
        <ScrollView
            scrollEnabled
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            <LayoutPublic>
                <Header marginTop={30} />
                <DsFlex marginTop={80} flexDirection="column">
                    <DsText
                        color="#F2F2F2"
                        fontSize={20}
                        lineHeight={35}
                        fontWeight="700"
                        textTransform="capitalize"
                    >
                        Home
                    </DsText>
                </DsFlex>
            </LayoutPublic>
        </ScrollView>
    );
};

export default HomeScreen;
