import React from 'react';

import Categories from '../../components/Categories';
import Populars from '../../components/Populars';

import hardwareBackPress from '../../utils/hardwareBackPress';
import { Container, Search, Title } from './styles';

export default function Donate({ navigation }) {
  hardwareBackPress('Dashboard', navigation)

  return (
    <Container>
      <Search
        placeholder="Busque por uma categoria"
        placeholderTextColor="#666"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Title>Categorias</Title>
      <Categories />

      <Title>Populares</Title>
      <Populars />
    </Container>
  );
}