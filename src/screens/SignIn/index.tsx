import { Platform, View } from "react-native";

//components
import { DsText } from "@ds/components/typography";
import { DsBox, DsFlex } from "@ds/layout";
import DsIcon from "@ds/components/global/icon";
import DsButton from "@ds/components/global/button";

//images

import DsInput from "@ds/components/form";
import { useState } from "react";

//choose mode
const SignIn = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleValueChange = (value: string) => {
        setInputValue(value);
    };

    return (
        <DsBox
            flex={1}
            alignItems="center"
            backgroundColor={"#1C1B1B"}
            paddingHorizontal={42}
        >
            <DsFlex
                justifyContent="space-between"
                alignItems="center"
                width={"100%"}
                marginTop={Platform.OS === "ios" ? 56 : 42}
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

            <DsFlex marginTop={80} flexDirection="column">
                <DsText
                    color="#F2F2F2"
                    fontSize={30}
                    lineHeight={35}
                    fontWeight="700"
                    textAlign="center"
                    textTransform="capitalize"
                >
                    Sign in
                </DsText>

                <DsFlex flexDirection="column" gap={16} marginTop={38}>
                    <DsInput
                        type="text"
                        value={inputValue}
                        onChangeText={handleValueChange}
                        placeholder="Enter username or email"
                        textTransform="capitalize"
                    />
                    <DsInput
                        type="text"
                        value={inputValue}
                        onChangeText={handleValueChange}
                        placeholder="Password"
                    />
                </DsFlex>

                <DsText
                    color="#A0A0A0"
                    fontSize={17}
                    lineHeight={25}
                    fontWeight="400"
                    textAlign="left"
                    marginTop={21}
                >
                    Recovery password
                </DsText>
                <DsButton
                    variant="secondary"
                    size="large"
                    paddingHorizontal={36}
                    fontWeight="700"
                    lineHeight={22}
                    borderRadius={30}
                    marginTop={22}
                >
                    Sign In
                </DsButton>
            </DsFlex>
        </DsBox>
    );
};

export default SignIn;
