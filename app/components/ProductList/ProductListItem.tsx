import * as React from 'react';
import styled from 'styled-components/native';
import { ViewProps } from 'react-native';
import ProductListImage from './ProductListImage';
import ProductListDetail from './ProductListDetail';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import { IProduct } from '../../store/types';

type Props = {
  item: IProduct;
};

const GridBox: React.FC<ViewProps> = styled.View`
  flex: 1;
  height: 400px;
  margin: 2px;
  justify-content: center;
  align-items: center;
  transform: scale(0.95);
`;

export default function ProductListItem({ item }: Props): JSX.Element {
  return (
    <GridBox style={GlobalStyle.shadow}>
      <ProductListImage image={item.img} />
      <ProductListDetail item={item} />
    </GridBox>
  );
}
