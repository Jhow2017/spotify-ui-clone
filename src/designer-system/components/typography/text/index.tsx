import React from 'react';
import styled from 'styled-components/native';
import { TextStyle, TextProps } from 'react-native';

interface DsTextProps extends TextStyle, TextProps {}

const StyledText = styled.Text<DsTextProps>``;

const DsText: React.FC<DsTextProps> = (props) => {
  const { children, ...attr } = props;

  return (
    <StyledText
      {...props} style={[props.style,
      {
        ...attr as TextStyle
      }]}
    >
      {props.children}
    </StyledText>
  );
};


export default DsText;