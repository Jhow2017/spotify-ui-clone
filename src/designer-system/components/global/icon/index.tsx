import React from 'react';
import { FlexStyle } from 'react-native';
import ComponentMounter, { ComponentMounterType } from '@ds/core/component-mounter';

import Spotify from '@images/spotify.svg';
import { SvgProps } from 'react-native-svg';

export type IconsType = 'bille' | 'spotify';

interface DsIconType extends FlexStyle, ComponentMounterType {
    icon: IconsType;
    width?: number;
    height?: number;
}

const DsIcon: React.FC<DsIconType> = (props) => {
    const { icon, ...attr } = props;

    return (
        <ComponentMounter>
            {icon === 'spotify' && (
                <Spotify width={props.width} style={[props.style]} {...(attr as SvgProps)} />
            )}
        </ComponentMounter>
    );
};

export default DsIcon;
