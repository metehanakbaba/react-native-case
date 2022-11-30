import * as React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

const CounterArea: React.FC<ViewProps> = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: top;
  margin-top: 10px;
`;

export default CounterArea;
