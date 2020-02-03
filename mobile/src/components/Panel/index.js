import React from 'react';

import popular from '../../assets/background-pets.jpg';

import {Container, Content, Title, Description} from './styles';

export default function Panel({translateY}) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [-200, 0],
              outputRange: [20, 0],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [-200, 0],
          outputRange: [0.5, 1],
          extrapolate: 'clamp',
        }),
      }}>
      <Content source={popular}>
        <Title>POPULAR</Title>
        <Description>Doação de artigos para pets</Description>
      </Content>
    </Container>
  );
}
