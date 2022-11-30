import * as React from 'react';
import styled from 'styled-components/native';
import { ViewProps } from 'react-native';
import Text from './Text';

type Props = {
  name: string;
  price: number;
};

const ProductTextArea: React.FC<ViewProps> = styled.View`
  flex: 2;
  justify-content: top;
  margin-top: 10px;
  color: #2e2f30;
`;

const ProducePriceArea: React.FC<ViewProps> = styled.View`
  background-color: #f1f1f1;
  width: 40px;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 3px;
  color: #254053;
`;

export default function ProductDescription({ name, price }: Props) {
  return (
    <ProductTextArea>
      <ProducePriceArea>
        <Text>${price}</Text>
      </ProducePriceArea>
      <Text>{name}</Text>
    </ProductTextArea>
  );
}
