import * as React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

export const ContainerWrapper: React.FC<ViewProps> = styled.View`
  width: 100%;
  background: white;
  margin: auto;
  flex: 1;
  height: 100px;
  flex-direction: row;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const DescriptionWrapper: React.FC<ViewProps> = styled.View`
  flex: 4;
  padding-horizontal: 10px;
  flex-shrink: 1;
  justify-content: center;
`;

export const BasketWrapper: React.FC<ViewProps> = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 10px;
  padding-left: 15px;
  background-color: #fff;
  margin-vertical: 5px;
  border-radius: 10px;
  transform: scale(0.95);
`;
