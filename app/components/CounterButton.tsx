import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

const CounterButton: React.FC<TouchableOpacityProps> = styled.TouchableOpacity`
  border-radius: 15px
  background-color: #f1f1f1;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

export default CounterButton;
