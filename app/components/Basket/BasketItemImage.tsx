import * as React from 'react';
import { ImageProps } from 'react-native';
import styled from 'styled-components/native';

const BasketItemImage: React.FC<ImageProps> = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export default BasketItemImage;
