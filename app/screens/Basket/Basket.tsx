import * as React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import Container from '../../components/Container';
import { IBasket } from '../../store/types';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  selectBasket,
} from '../../store/slices/basketSlice';
import BasketItem from '../../components/Basket/BasketItem';

export enum HandleType {
  Remove,
  Increment,
  Decrement,
}

export default function Basket() {
  const data = useSelector(selectBasket);
  const dispatch = useAppDispatch();

  const handleItem = (id: number, process: HandleType) => {
    if (process === HandleType.Remove) {
      dispatch(removeItem(id));
    } else if (process === HandleType.Increment) {
      dispatch(incrementQuantity(id));
    } else if (process === HandleType.Decrement) {
      dispatch(decrementQuantity(id));
    }
  };

  return (
    <Container>
      <FlatList
        data={data as IBasket[]}
        refreshing={false}
        removeClippedSubviews={false}
        maxToRenderPerBatch={10}
        initialNumToRender={10}
        renderItem={({ item }) => BasketItem(item, handleItem)}
        keyExtractor={({ id }: IBasket) => {
          return String(id * Math.random()); // Temporary solution
        }}
      />
    </Container>
  );
}
