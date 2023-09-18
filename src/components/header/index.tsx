import { Platform, View } from "react-native";

//components
import { DsFlex } from "@ds/layout";
import DsIcon from "@ds/components/global/icon";
import { useNavigation } from "@react-navigation/native";
import { DsFlexType } from "@ds/layout/flex";

//choose mode
const Header: React.FC<DsFlexType> = (props) => {
    const navigation = useNavigation();
    return (
        <DsFlex
            {...props}
            justifyContent="space-between"
            alignItems="center"
            width={"100%"}
            marginTop={Platform.OS === "ios" ? props?.marginTop ?? 56 : 42}
        >
            <DsIcon
                icon="arrow-left"
                size={24}
                width={32}
                height={32}
                color="#DDDDDD"
                backgroundColor={"#232222"}
                borderRadius={50}
                justifyContent="center"
                alignItems="center"
                position="absolute"
                left={0}
                onPress={() => navigation.goBack()}
            />

            <DsIcon
                icon="spotify"
                size={116}
                color="#62CD5D"
                justifyContent="center"
                alignItems="center"
            />

            <View />
        </DsFlex>
    );
};

export default Header;
