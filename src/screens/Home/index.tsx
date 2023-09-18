//components
import { DsText } from "@ds/components/typography";
import { DsBox } from "@ds/layout";

//choose mode
const HomeScreen = () => {
    return (
        <DsBox
            flex={1}
            alignItems="center"
            backgroundColor={"#1C1B1B"}
            paddingHorizontal={42}
        >
            <DsText
                color="#F2F2F2"
                fontSize={20}
                lineHeight={35}
                fontWeight="700"
                textTransform="capitalize"
            >
                Home
            </DsText>
        </DsBox>
    );
};

export default HomeScreen;
