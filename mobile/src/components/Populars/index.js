import React from 'react';

import alimentos from '../../assets/background-alimentos.jpg';
import brinquedos from '../../assets/background-brinquedos.jpg';
import pets from '../../assets/background-pets-2.jpg';

import {
  Container,
  Content,
  Thumbnail,
  Label,
  Item,
  Title,
  Description,
} from './styles';

export default function Populars() {
  return (
    <Container>
      <Content>
        <Thumbnail source={pets}>
          <Label>Pets</Label>
        </Thumbnail>

        <Item>
          <Title>Artigos para Pets</Title>
          <Description>
            Rações, petiscos e brinquedos em boas condições
          </Description>
        </Item>
      </Content>

      <Content>
        <Thumbnail source={alimentos}>
          <Label>Alimentos</Label>
        </Thumbnail>

        <Item>
          <Title>Alimentos</Title>
          <Description>
            Alimentos não perecíveis com validade em até 3 meses
          </Description>
        </Item>
      </Content>

      <Content>
        <Thumbnail source={brinquedos}>
          <Label>Brinquedos</Label>
        </Thumbnail>

        <Item>
          <Title>Brinquedos</Title>
          <Description>Brinquedos novos ou usados em bom estado</Description>
        </Item>
      </Content>
    </Container>
  );
}
