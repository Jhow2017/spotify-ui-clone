import React from 'react';
import { FlexStyle, View } from 'react-native';
import ComponentMounter, { ComponentMounterType } from '@ds/core/component-mounter';

interface DsFlexType extends FlexStyle, ComponentMounterType {
    gap?: number;
}

const DsFlex: React.FC<DsFlexType> = (props) => {
    const { children, gap, ...attr } = props;

    const childrenWithGap = React.Children.map(children, (child, index) => {
        if (index === 0) {
            return child;
        }
        return (
            <>
                <View style={{ marginRight: gap ?? 0 }} />
                {child}
            </>
        );
    });

    return (
        <ComponentMounter style={{ flexDirection: 'row' }} {...attr}>
            {childrenWithGap}
        </ComponentMounter>
    );
};

export default DsFlex;
