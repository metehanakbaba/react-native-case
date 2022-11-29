import * as React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Container;
