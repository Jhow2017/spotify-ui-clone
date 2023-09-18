import { ScrollView } from "react-native";

//@Ds
import { DsBox, DsFlex } from "@ds/layout";
import { DsText } from "@ds/components/typography";

//components
import Header from "@components/header";
import LayoutPublic from "@components/layout/layout-public";

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
                <DsBox
                    backgroundColor={"#42C83C"}
                    width={"100%"}
                    height={118}
                    borderRadius={30}
                    marginTop={65}
                    position="relative"
                    overflow="hidden"
                    padding={32}
                >
                    <DsFlex flexDirection="column">
                        <DsText
                            fontFamily={"Inter_300Light"}
                            fontWeight={"700"}
                            fontSize={14}
                            lineHeight={14}
                            textTransform={"capitalize"}
                            color={"#FBFBFB"}
                        >
                            New album
                        </DsText>
                        <DsText
                            color="#FBFBFB"
                            fontFamily="Inter_900Black"
                            fontSize={19}
                            fontWeight="700"
                            textTransform="capitalize"
                        >
                            Happier Than Ever
                        </DsText>
                        <DsText
                            color="#F2F2F2"
                            fontSize={20}
                            lineHeight={35}
                            fontWeight="700"
                            textTransform="capitalize"
                        >
                            Billie Eilish
                        </DsText>
                    </DsFlex>
                </DsBox>
            </LayoutPublic>
        </ScrollView>
    );
};

export default HomeScreen;
