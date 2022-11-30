import * as React from 'react';
import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  Button,
  ImageProps,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Text from '../Text';
import ProductDescription from '../ProductDescription';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import { IBasket } from '../../store/basket/BasketType';

type Props = {
  item: IBasket;
};

const Wrapper: React.FC<ViewProps> = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 10px;
  padding-left: 15px;
  background-color: #fff;
  margin-vertical: 5px;
  border-radius: 10px;
  transform: scale(0.95);
`;

const BasketItemImage: React.FC<ImageProps> = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const CounterArea: React.FC<ViewProps> = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: top;
  margin-top: 10px;
`;
const DeleteView: React.FC<ViewProps> = styled.View`
  margin: 0px;
  align-content: center;
  justify-content: center;
`;
const CounterButton: React.FC<TouchableOpacityProps> = styled.TouchableOpacity`
  border-radius: 15px
  background-color: #f1f1f1;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

export default function BasketItem(
  { item }: Props,
  onClick: (id: number) => void,
) {
  const row: Array<Swipeable> = [];

  const renderRightActions = () => {
    return (
      <DeleteView>
        <Button
          color="red"
          title="DELETE"
          onPress={() => {
            onClick(item.id);
          }}
        />
      </DeleteView>
    );
  };

  const { name, img, price } = item.item;
  return (
    <Swipeable
      useNativeAnimations
      renderRightActions={() => renderRightActions()}
      ref={(ref: Swipeable) => {
        row[item.id] = ref;
      }}
    >
      <Wrapper style={GlobalStyle.shadow}>
        <BasketItemImage source={{ uri: img }} />
        <ProductDescription name={name} price={price} />
        <CounterArea>
          <CounterButton>
            <FontAwesome name="angle-up" size={25} color="#254053" />
          </CounterButton>
          <Text style={{ marginTop: 9 }}>10</Text>
          <CounterButton>
            <FontAwesome name="angle-down" size={25} color="#254053" />
          </CounterButton>
        </CounterArea>
      </Wrapper>
    </Swipeable>
  );
}
