import React from 'react';
import ComponentMounter, { ComponentMounterType } from '@ds/core/component-mounter';
import { FlexStyle } from 'react-native';

interface DsBoxType extends FlexStyle, ComponentMounterType {}

const DsBox: React.FC<DsBoxType> = (props) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter {...attr}>
            {children}
        </ComponentMounter>
    );
};


export default DsBox;