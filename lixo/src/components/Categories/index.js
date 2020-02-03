import React from 'react';

import alimentos from '../../assets/background-alimentos.jpg';
import moveis from '../../assets/background-moveis.jpg';
import vestimentas from '../../assets/background-vestimentas.jpg';
import brinquedos from '../../assets/background-brinquedos.jpg';
import pets from '../../assets/background-pets-2.jpg';

import {Container, Thumbnail, Label} from './styles';

export default function Categories() {
  return (
    <Container>
      <Thumbnail source={alimentos}>
        <Label>Alimentos</Label>
      </Thumbnail>

      <Thumbnail source={moveis}>
        <Label>Móveis</Label>
      </Thumbnail>

      <Thumbnail source={vestimentas}>
        <Label>Vestimentas</Label>
      </Thumbnail>

      <Thumbnail source={brinquedos}>
        <Label>Brinquedos</Label>
      </Thumbnail>

      <Thumbnail source={pets}>
        <Label>Pets</Label>
      </Thumbnail>
    </Container>
  );
}
