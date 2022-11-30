import * as React from 'react';
import styled from 'styled-components/native';
import { PropsWithChildren } from 'react';
import { ImageBackgroundProps } from 'react-native';

type Props = {
  image: string;
};

const Wrapper: React.FC<PropsWithChildren> = styled.View`
  width: 100%;
  height: 325px;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  borderTopLeftRadius: 10px,
  borderTopRightRadius: 10px,
`;

const Image: React.FC<ImageBackgroundProps> = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;

export default function ProductListImage({ image }: Props) {
  return (
    <Wrapper>
      <Image source={{ uri: image }} />
    </Wrapper>
  );
}
