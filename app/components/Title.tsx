import * as React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
};

const Title: React.FC<Props> = styled.Text`
  font-size: 50px;
  font-weight: bold;
`;

export default Title;
