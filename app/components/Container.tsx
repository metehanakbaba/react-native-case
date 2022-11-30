import * as React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = styled.View`
  border: 2px solid gray;
  display: flex;
  flex-wrap: wrap;
  height: 300px;
`;

export default Container;
