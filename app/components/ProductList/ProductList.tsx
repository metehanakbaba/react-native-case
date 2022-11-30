import * as React from 'react';
import { PropsWithChildren } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { IProduct } from 'app/store/product/ProductTypes';
import { IApplicationState } from 'app/store';
import ProductListItem from './ProductListItem';

const MainContainer: React.FC<PropsWithChildren> = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export default function ProductList() {
  const { datas } = useSelector(
    (state: IApplicationState) => state.productsState.products,
  );

  return (
    <MainContainer>
      <FlatList
        numColumns={2}
        data={datas as IProduct[]}
        renderItem={ProductListItem}
        keyExtractor={(item: IProduct) => String(item.id)}
      />
    </MainContainer>
  );
}
