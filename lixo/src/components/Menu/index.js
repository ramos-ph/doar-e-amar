import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, List, Item, Label} from './styles';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [-200, 0],
          outputRange: [1, 0],
        }),
      }}>
      <List>
        <Item>
          <Icon name="format-align-left" size={32} color="#FFF" />
          <Label>Notícias</Label>
        </Item>

        <Item>
          <Icon name="show-chart" size={32} color="#FFF" />
          <Label>Estatísticas</Label>
        </Item>

        <Item>
          <Icon name="people" size={32} color="#FFF" />
          <Label>Encontrar ONGs</Label>
        </Item>

        <Item>
          <Icon name="my-location" size={32} color="#FFF" />
          <Label>Localização</Label>
        </Item>

        <Item>
          <Icon name="person-add" size={32} color="#FFF" />
          <Label>Convidar amigos</Label>
        </Item>
      </List>
    </Container>
  );
}

