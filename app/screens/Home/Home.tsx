import * as React from 'react';
import { FlatList } from 'react-native';
import { IProduct } from '../../store/types';
import Container from '../../components/Container';
import { useGetProductsQuery } from '../../store/apiService';
import ProductListItem from '../../components/ProductList/ProductListItem';

export default function Home() {
  const { currentData } = useGetProductsQuery(undefined);
  return (
    <Container>
      <FlatList
        numColumns={2}
        data={currentData as unknown as IProduct[]}
        renderItem={ProductListItem}
        keyExtractor={(item: IProduct) => String(item.name)}
      />
    </Container>
  );
}
