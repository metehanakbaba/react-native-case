import * as React from 'react';
import styled from 'styled-components/native';
import { PropsWithChildren } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacityProps } from 'react-native';
import { useDispatch } from 'react-redux';
import ProductDescription from '../ProductDescription';
import { addBasketRequest } from '../../store/basket/BasketActions';
import { IProduct } from '../../store/product/ProductTypes';

interface Props {
  item: IProduct;
}

const Wrapper: React.FC<PropsWithChildren> = styled.View`
  width: 100%;
  background: white;
  margin: auto;
  flex: 1;
  height: 100px;
  flex-direction: row;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const DescriptionWrapper: React.FC<PropsWithChildren> = styled.View`
  flex: 4;
  padding-horizontal: 10px;
  flex-shrink: 1;
  justify-content: center;
`;
const AddBasket: React.FC<TouchableOpacityProps> = styled.TouchableOpacity`
  flex: 2;
  background-color: #f1f1f1;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 10px;
  border-left-width: 0.5px;
  border-left-color: #254053;
`;

export default function ProductListDetail({ item }: Props) {
  const dispatch = useDispatch();

  const handleBasket = () => {
    dispatch(addBasketRequest(item));
  };

  return (
    <Wrapper>
      <DescriptionWrapper>
        <ProductDescription name={item.name} price={item.price} />
      </DescriptionWrapper>
      <AddBasket onPress={handleBasket}>
        <FontAwesome name="shopping-basket" size={20} color="#254053" />
      </AddBasket>
    </Wrapper>
  );
}
