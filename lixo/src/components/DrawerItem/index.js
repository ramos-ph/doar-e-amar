import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Item, Label} from './styles';

export default function DrawerItem({icon, label}) {
  return (
    <Container>
      <Item>
        <Icon name={icon} size={28} color="#111" />
        <Label>{label}</Label>
      </Item>
    </Container>
  );
}
