import { Platform, TouchableOpacity } from "react-native";

//components
import { DsText } from "@ds/components/typography";
import { DsBox, DsFlex } from "@ds/layout";
import DsImage from "@ds/components/global/image";
import DsIcon from "@ds/components/global/icon";

//images
import Bille from "@images/bille.png";
import DsButton from "@ds/components/global/button";

const GetStarted = () => {
    return (
        <DsBox flex={1} alignItems="center" backgroundColor={"#0d0c0c"}>
            <DsImage position="absolute" source={Bille} />
            <DsIcon
                icon="spotify"
                marginTop={Platform.OS === "ios" ? 57 : 37}
                size={196}
            />

            <DsFlex
                top={Platform.OS === "ios" ? 300 : 200}
                alignItems="center"
                flexDirection="column"
                paddingHorizontal={53}
            >
                <DsText
                    color="#DADADA"
                    fontSize={25}
                    lineHeight={33}
                    fontWeight="700"
                >
                    Enjoy listening to music
                </DsText>
                <DsText
                    color="#DADADA"
                    fontSize={17}
                    lineHeight={22}
                    fontWeight="400"
                    textAlign="center"
                    marginTop={21}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sagittis enim purus sed phasellus. Cursus ornare id
                    scelerisque aliquam.
                </DsText>
                <DsButton
                    variant="secondary"
                    size="large"
                    marginTop={37}
                    fontWeight="700"
                    lineHeight={22}
                    textTransform="capitalize"
                >
                    Get started
                </DsButton>
            </DsFlex>
        </DsBox>
    );
};

export default GetStarted;
