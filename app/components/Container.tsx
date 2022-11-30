import * as React from 'react';
import styled from 'styled-components/native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

const Container: React.FC<SafeAreaViewProps> = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export default Container;
