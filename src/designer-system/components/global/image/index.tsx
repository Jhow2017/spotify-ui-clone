import React from 'react';
import { Image, ImageProps, FlexStyle } from 'react-native';

//@ts-ignore
interface DsImageType extends ImageProps, FlexStyle {
    width?: string | undefined;
    height?: string | undefined;
}

const DsImage: React.FC<DsImageType> = (props) => {
    return (
        //@ts-ignore
        <Image {...props} style={[props.style, {width: props.width || '100%',height:  props.height || '100%'}]} />
    );
};


export default DsImage;