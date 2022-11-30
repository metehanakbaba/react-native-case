import * as React from 'react';
import styled from 'styled-components/native';
import { TextProps } from 'react-native';

const Text: React.FC<TextProps> = styled.Text`
  font-size: 10px;
  font-weight: 300;
`;

export default Text;
