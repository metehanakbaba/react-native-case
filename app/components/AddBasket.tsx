import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

const AddBasket: React.FC<TouchableOpacityProps> = styled.TouchableOpacity`
  flex: 2;
  background-color: #f1f1f1;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 10px;
  border-left-width: 0.5px;
  border-left-color: #254053;
`;

export default AddBasket;
