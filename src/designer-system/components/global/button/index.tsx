import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
    ActivityIndicator,
    TextStyle,
} from "react-native";

//components
import { DsText } from "@ds/components/typography";
import DsIcon, { IconsType } from "@ds/components/global/icon";
import { filterProps } from "src/services/utils/filterProps";

interface DsButtonProps extends TouchableOpacityProps, TextStyle, ViewStyle {
    children: React.ReactNode;
    variant: "default" | "primary" | "secondary";
    size: "small" | "medium" | "large";
    loading?: boolean;
    icon?: IconsType;
    iconLeft?: boolean;
}

const DsButton: React.FC<DsButtonProps> = (props) => {
    const { variant, size, loading, icon, iconLeft, children, ...attr } = props;

    const buttonStyles: ViewStyle = {
        borderRadius: 30,
        padding:
            (size === "small" && 4) ||
            (size === "medium" && 12) ||
            (size === "large" && 30) ||
            0,
        alignItems: "center",
        justifyContent: "center",
        width:
            (size === "small" && 120) ||
            (size === "medium" && 220) ||
            (size === "large" && 329) ||
            "auto",
        height:
            (size === "small" && 40) ||
            (size === "medium" && 52) ||
            (size === "large" && 92) ||
            "auto",
        backgroundColor:
            variant === "default"
                ? "transparent"
                : variant === "primary"
                ? "blue"
                : variant === "secondary"
                ? "#42C83C"
                : attr?.backgroundColor,
        ...(attr as ViewStyle),
    };

    const textSize = {
        small: 14,
        medium: 16,
        large: 22,
    };

    const textStyles: TextStyle = {
        fontSize: attr.fontSize ?? textSize[size],
        color:
            attr.color ??
            (variant === "primary"
                ? "red"
                : variant === "secondary"
                ? "#F6F6F6"
                : "#fff"),
        ...filterProps(attr),
    };

    return (
        <TouchableOpacity style={buttonStyles} disabled={loading} {...attr}>
            {loading ? (
                <ActivityIndicator color={textStyles.color} />
            ) : (
                <>
                    {iconLeft && icon && <DsIcon icon={icon} />}
                    <DsText {...(textStyles as TextStyle)}>{children}</DsText>
                    {!iconLeft && icon && <DsIcon icon={icon} />}
                </>
            )}
        </TouchableOpacity>
    );
};

export default DsButton;
