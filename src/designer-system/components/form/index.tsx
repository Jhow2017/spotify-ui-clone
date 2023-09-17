import React from "react";
import {
    TextInput,
    TextInputProps,
    KeyboardTypeOptions,
    ViewStyle,
    TextStyle,
} from "react-native";

type InputTypes = "text" | "search" | "date" | "password" | "number";

type DsInputProps = Omit<TextInputProps, "textAlign"> &
    TextStyle & {
        type: InputTypes;
        TypeInput?: "flat" | "outlined";
    };

const transformPlaceholder = (
    text: string | undefined,
    transform: TextStyle["textTransform"]
) => {
    if (!text) return text;

    switch (transform) {
        case "capitalize":
            return text.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
        case "uppercase":
            return text.toUpperCase();
        case "lowercase":
            return text.toLowerCase();
        default:
            return text;
    }
};

const DsInput: React.FC<DsInputProps> = ({ type, ...props }) => {
    const { children, textTransform, placeholder, ...attr } = props;

    let keyboardType: KeyboardTypeOptions = "default";

    if (type === "number") {
        keyboardType = "numeric";
    } else if (type === "search") {
        keyboardType = "web-search";
    } else if (type === "date") {
        keyboardType = "numeric";
    } else if (type === "password") {
        // Use appropriate keyboardType for password if needed
    }

    return (
        <TextInput
            {...(attr as TextInputProps)}
            placeholderTextColor={attr.placeholderTextColor || "#A7A7A7"}
            keyboardType={keyboardType}
            placeholder={transformPlaceholder(placeholder, textTransform)}
            style={{
                width: attr?.width ?? 334,
                height: attr?.height ?? 80,
                flexShrink: 0,
                borderRadius: attr?.borderRadius ?? 30,
                borderWidth: attr?.borderWidth ?? 1,
                borderColor: attr?.borderColor ?? "#fff",
                opacity: attr?.opacity ?? 0.14,
                color: attr?.color ?? "#fff",
                fontSize: attr?.fontSize ?? 16,
                fontStyle: attr?.fontStyle ?? "normal",
                fontWeight: attr?.fontWeight ?? "700",
                padding: attr?.padding ?? 30,
                ...(attr.style as ViewStyle),
            }}
        />
    );
};

export default DsInput;
