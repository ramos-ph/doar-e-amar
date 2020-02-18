import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Header,
  Avatar,
  Name,
  Label,
  Content,
  Image,
  Footer,
  Title,
  Description,
} from './styles';

import vestimentas from '../../assets/background-vestimentas.jpg';

import api from '../../services/api';

export default function Profile() {
  const [user, setUser] = useState({});
  const [donation, setDonation] = useState({});

  useEffect(() => {
    async function loadUser() {
      const data = await AsyncStorage.getItem('user');
      const donations = await AsyncStorage.getItem('donations');

      setUser(JSON.parse(data));
      setDonation(JSON.parse(donations));
    }

    loadUser();
  }, []);

  return (
    <Container>
      <Header>
        <Avatar source={{uri: user.avatar_url}} />

        <Name>{user.nome}</Name>
        <Label>{user.email}</Label>
      </Header>

      <Content>
        <Label>Última doação:</Label>
        <Image source={vestimentas} />

        <Footer>
          <Title>Caixa de camisetas</Title>
          <Description>Camisetas de vários tamanhos</Description>
        </Footer>
      </Content>
    </Container>
  );
}
