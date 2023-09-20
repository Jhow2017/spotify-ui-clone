import React from "react";
import styled from "styled-components/native";
import { TextStyle, TextProps } from "react-native";

interface DsTextProps extends TextStyle, TextProps {
    fontFamily?:
        | "Inter_300Light"
        | "Inter_400Regular"
        | "Inter_500Medium"
        | "Inter_700Bold"
        | "Inter_900Black";
}

const StyledText = styled.Text<DsTextProps>``;

const DsText: React.FC<DsTextProps> = (props) => {
    const { children, ...attr } = props;

    return (
        <StyledText
            {...props}
            style={[
                props.style,
                {
                    ...(attr as TextStyle),
                },
            ]}
        >
            {props.children}
        </StyledText>
    );
};

export default DsText;
