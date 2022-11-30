import * as React from 'react';
import { Button } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Swipeable } from 'react-native-gesture-handler';
import Text from '../Text';
import CounterArea from './CounterArea';
import RemoveView from './RemoveView';
import { BasketWrapper } from '../Wrappers';
import CounterButton from '../CounterButton';
import BasketItemImage from './BasketItemImage';
import ProductDescription from '../ProductDescription';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import { IBasket } from '../../store/types';

export enum HandleType {
  Remove,
  Increment,
  Decrement,
}

const BasketItem = (
  item: IBasket,
  onClick: (id: number, process: HandleType) => void,
): JSX.Element => {
  const row: Array<Swipeable> = [];
  const { item: product } = item;
  const { name, img, price } = product;
  const { id, quantity } = item;

  const renderRightActions = () => {
    return (
      <RemoveView>
        <Button
          color="red"
          title="DELETE"
          onPress={() => {
            onClick(id, HandleType.Remove);
          }}
        />
      </RemoveView>
    );
  };

  return (
    <Swipeable
      useNativeAnimations
      renderRightActions={() => renderRightActions()}
      ref={(ref: Swipeable) => {
        row[id] = ref;
      }}
    >
      <BasketWrapper style={GlobalStyle.shadow}>
        <BasketItemImage source={{ uri: img }} />
        <ProductDescription name={name} price={price} />
        <CounterArea>
          <CounterButton
            onPress={() => {
              onClick(id, HandleType.Increment);
            }}
          >
            <FontAwesome name="angle-up" size={25} color="#254053" />
          </CounterButton>
          <Text style={{ marginTop: 9 }}>{quantity}</Text>
          <CounterButton
            onPress={() => {
              onClick(id, HandleType.Decrement);
            }}
          >
            <FontAwesome name="angle-down" size={25} color="#254053" />
          </CounterButton>
        </CounterArea>
      </BasketWrapper>
    </Swipeable>
  );
};
export default BasketItem;
