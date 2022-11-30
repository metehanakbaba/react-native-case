import * as React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import ProductDescription from '../ProductDescription';
import AddBasket from '../AddBasket';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import { addToBasket } from '../../store/slices/basketSlice';
import { ContainerWrapper, DescriptionWrapper } from '../Wrappers';
import { IProduct } from '../../store/types';

interface Props {
  item: IProduct;
}

export default function ProductListDetail({ item }: Props) {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <ContainerWrapper>
      <DescriptionWrapper>
        <ProductDescription name={item.name} price={item.price} />
      </DescriptionWrapper>
      <AddBasket
        onPress={() => {
          dispatch(addToBasket(item));
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          navigation.navigate('Basket');
        }}
      >
        <FontAwesome name="shopping-basket" size={20} color="#254053" />
      </AddBasket>
    </ContainerWrapper>
  );
}
