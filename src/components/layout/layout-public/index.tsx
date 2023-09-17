//components
import { DsBox } from "@ds/layout";
import { DsBoxType } from "@ds/layout/box";
import { FlexStyle } from "react-native";

interface LayoutPublicProps extends DsBoxType {
    children?: React.ReactNode;
}
const LayoutPublic: React.FC<LayoutPublicProps> = (props) => {
    const { children, ...attr } = props;
    return (
        <DsBox
            {...attr}
            flex={attr?.flex || 1}
            alignItems={attr.alignItems || "center"}
            backgroundColor={attr.backgroundColor || "#1C1B1B"}
            paddingHorizontal={attr.paddingHorizontal || 42}
        >
            {children}
        </DsBox>
    );
};

export default LayoutPublic;
