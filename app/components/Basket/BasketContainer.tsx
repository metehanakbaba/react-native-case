import * as React from 'react';
import { PropsWithChildren } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { IApplicationState } from 'app/store';
import BasketItem from './BasketItem';
import { IBasket } from '../../store/basket/BasketType';
import { removeBasketRequest } from '../../store/basket/BasketActions';

const MainContainer: React.FC<PropsWithChildren> = styled.SafeAreaView`
  flex: 1;
  background-color: #f1f1f1;
`;

export default function BasketContainer() {
  const { datas } = useSelector(
    (state: IApplicationState) => state.basketState.basket,
  );

  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeBasketRequest(id));
  };

  return (
    <MainContainer>
      <FlatList
        data={datas as IBasket[]}
        renderItem={({ item }) => BasketItem({ item }, handleRemove)}
        keyExtractor={(item: IBasket) => String(item.id)}
      />
    </MainContainer>
  );
}
