import React from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

//@Ds
import { DsBox } from "@ds/layout";
import { DsBoxType } from "@ds/layout/box";

interface DsDividerProps extends DsBoxType {
    gradient?: LinearGradientProps;
}

const DsDivider: React.FC<DsDividerProps> = (props) => {
    const { gradient, ...attr } = props;

    const {
        colors = ["#252525", "#5B5B5B"],
        start = [0, 0],
        end = [1, 0],
        style,
    } = gradient || {};

    return (
        <DsBox width={146} height={1} {...attr}>
            <LinearGradient
                {...(attr as LinearGradientProps)}
                colors={colors || ["#252525", "#5B5B5B"]}
                start={start || [0, 0]}
                end={end || [1, 0]}
                style={[style || { flex: 1 }]}
            />
        </DsBox>
    );
};

export default DsDivider;
