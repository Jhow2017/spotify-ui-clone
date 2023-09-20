import { ScrollView } from "react-native";

//@Ds
import { DsBox, DsFlex } from "@ds/layout";
import { DsText } from "@ds/components/typography";
import { DsImage } from "@ds/components/global";

//components
import Header from "@components/header";
import LayoutPublic from "@components/layout/layout-public";

//images
import WomanNewAlbum from "@images/dashboard/woman-new-album2.png";

const HomeScreen = () => {
    return (
        <ScrollView
            scrollEnabled
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            <LayoutPublic>
                <Header marginTop={30} sizeLogo={150} />
                <DsBox
                    backgroundColor={"#42C83C"}
                    width={"100%"}
                    height={118}
                    borderRadius={30}
                    marginTop={38}
                    position="relative"
                    padding={24}
                    flexDirection="row"
                    alignItems="center"
                >
                    <DsFlex flexDirection="column" gap={4}>
                        <DsText
                            fontFamily={"Inter_500Medium"}
                            fontSize={14}
                            textTransform={"capitalize"}
                            color={"#FBFBFB"}
                        >
                            New album
                        </DsText>
                        <DsText
                            color="#FBFBFB"
                            fontFamily="Inter_700Bold"
                            fontSize={19}
                            lineHeight={26}
                            width={147}
                            textTransform="capitalize"
                        >
                            Happier Than Ever
                        </DsText>
                        <DsText
                            color="#F2F2F2"
                            fontSize={13}
                            fontFamily="Inter_500Medium"
                            textTransform="capitalize"
                        >
                            Billie Eilish
                        </DsText>
                    </DsFlex>
                    <DsImage
                        source={WomanNewAlbum}
                        resizeMode="cover"
                        width={325}
                        height={200}
                        position="absolute"
                        right={5}
                        bottom={0}
                    />
                    <DsImage
                        source={WomanNewAlbum}
                        resizeMode="cover"
                        width={325}
                        height={200}
                        position="absolute"
                        right={5}
                        bottom={0}
                    />
                </DsBox>
            </LayoutPublic>
        </ScrollView>
    );
};

export default HomeScreen;
