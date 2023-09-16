import React, { ReactNode } from 'react';
import { View, ViewProps, ScrollView, ScrollViewProps, ViewStyle } from 'react-native';

export interface ComponentMounterType extends ViewProps, ViewStyle, ScrollViewProps {
    children?: ReactNode;
    as?: 'View' | 'ScrollView';
};

const ComponentMounter: React.FC<ComponentMounterType> = (props) => {
    const { children, as = 'View', ...attr } = props;

    return (
        <>
            {as === 'View' ? (
                <View {...attr} style={attr.style}>
                    {children}
                </View>
            ) : (
                <ScrollView {...attr} style={attr.style}>
                    {children}
                </ScrollView>
            )}
        </>
    );
};

export default ComponentMounter;
