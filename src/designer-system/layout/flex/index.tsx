import React, { ReactNode } from 'react';
import ComponentMounter, { ComponentMounterType } from '@ds/core/component-mounter';
import { FlexStyle } from 'react-native';

interface DsFlexType extends FlexStyle, ComponentMounterType {}

const DsFlex: React.FC<DsFlexType> = (props) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter {...attr}>
            {children}
        </ComponentMounter>
    );
};


export default DsFlex;