import React from 'react';
import {withNavigation} from 'react-navigation';

import alimentos from '../../assets/background-alimentos.jpg';
import moveis from '../../assets/background-moveis.jpg';
import vestimentas from '../../assets/background-vestimentas.jpg';
import brinquedos from '../../assets/background-brinquedos.jpg';
import pets from '../../assets/background-pets-2.jpg';

import {Container, Wrapper, Thumbnail, Label} from './styles';

function Categories({navigation}) {
  function handlePress(category) {
    navigation.navigate('New', { category });
  }

  return (
    <Container>
      <Wrapper onPress={() => handlePress('Alimentos')}>
        <Thumbnail source={alimentos}>
          <Label>Alimentos</Label>
        </Thumbnail>
      </Wrapper>

      <Wrapper onPress={() => handlePress('Móveis')}>
        <Thumbnail source={moveis}>
          <Label>Móveis</Label>
        </Thumbnail>
      </Wrapper>

      <Wrapper onPress={() => handlePress('Vestimentas')}>
        <Thumbnail source={vestimentas}>
          <Label>Vestimentas</Label>
        </Thumbnail>
      </Wrapper>

      <Wrapper onPress={() => handlePress('Brinquedos')}>
        <Thumbnail source={brinquedos}>
          <Label>Brinquedos</Label>
        </Thumbnail>
      </Wrapper>

      <Wrapper onPress={() => handlePress('Pets')}>
        <Thumbnail source={pets}>
          <Label>Pets</Label>
        </Thumbnail>
      </Wrapper>
    </Container>
  );
}

export default withNavigation(Categories);
