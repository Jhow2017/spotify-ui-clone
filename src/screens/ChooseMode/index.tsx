import { Platform } from "react-native";

//components
import { DsText } from "@ds/components/typography";
import { DsBox, DsFlex } from "@ds/layout";
import DsIcon from "@ds/components/global/icon";
import DsButton from "@ds/components/global/button";

//images
import DsImage from "@ds/components/global/image";
import Bille from "@images/image1.png";

const ChooseMode = () => {
    return (
        <DsBox flex={1} alignItems="center" backgroundColor={"#494949"}>
            <DsImage position="absolute" source={Bille} />
            <DsIcon
                icon="spotify"
                marginTop={Platform.OS === "ios" ? 57 : 37}
                size={196}
            />

            <DsFlex
                top={Platform.OS === "ios" ? 300 : 200}
                alignItems="center"
                paddingHorizontal={53}
                flexDirection="column"
            >
                <DsText
                    color="#DADADA"
                    fontSize={22}
                    fontWeight="700"
                    textTransform="capitalize"
                >
                    Choose mode
                </DsText>
                <DsFlex gap={90} marginTop={32}>
                    <DsIcon
                        icon="moon"
                        size={30}
                        height={73}
                        width={73}
                        backgroundColor={"#3f463c"}
                        borderRadius={50}
                        justifyContent="center"
                        alignItems="center"
                        onPress={() => console.log("Clicou na Lua")}
                    >
                        Dark mode
                    </DsIcon>
                    <DsIcon
                        icon="sun"
                        size={30}
                        height={73}
                        width={73}
                        backgroundColor={"#31383b"}
                        borderRadius={50}
                        justifyContent="center"
                        alignItems="center"
                        onPress={() => console.log("Clicou no Sol")}
                    >
                        Light mode
                    </DsIcon>
                </DsFlex>
                <DsButton
                    variant="secondary"
                    size="large"
                    marginTop={37}
                    fontWeight="600"
                >
                    Continue
                </DsButton>
            </DsFlex>
        </DsBox>
    );
};

export default ChooseMode;
