import React from "react";
import { View, ViewStyle, FlexStyle } from "react-native";
import ComponentMounter, {
    ComponentMounterType,
} from "@ds/core/component-mounter";

export interface DsFlexType extends FlexStyle, ComponentMounterType {
    gap?: number;
}

const DsFlex: React.FC<DsFlexType> = (props) => {
    const { children, gap, ...attr } = props;

    const modifiedChildren = React.Children.map(children, (child, index) => {
        if (index === 0) {
            return child;
        }

        const marginStyle: ViewStyle = {};
        if (gap) {
            if (attr?.flexDirection === "column") {
                marginStyle.marginTop = gap;
            } else {
                marginStyle.marginLeft = gap;
            }
        }

        return (
            <>
                <View style={marginStyle} />
                {child}
            </>
        );
    });

    return (
        <ComponentMounter style={{ flexDirection: "row", ...attr }} {...attr}>
            {modifiedChildren}
        </ComponentMounter>
    );
};

export default DsFlex;
