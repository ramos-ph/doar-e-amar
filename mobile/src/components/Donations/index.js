import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import {
  Container,
  Content,
  Item,
  ItemContent,
  Info,
  Thumbnail,
  Title,
  Description,
  ExpiresIn,
  Status,
  StatusText,
  Empty
} from './styles';

export default function DonationList() {
  const [donations, setDonations] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadDonations() {
      const token = await AsyncStorage.getItem('token');

      const response = await api.get(`/donations?page=${page}`, {
        headers: { authorization: `Bearer ${token}` }
      });

      setDonations(response.data.docs);
    }

    loadDonations();
  }, []);

  return (
    <Container>
      {donations.length !== 0 ?
        donations.reverse().map(donation => (
          <Content>
            <Item key={donation._id}>
              <ItemContent>
                <Thumbnail source={{uri: donation.foto_url}} />

                <Info>
                  <Title>{donation.titulo}</Title>
                  <Description>{donation.descricao}</Description>
                </Info>

                <Title>Code</Title>

              </ItemContent>

              <Status style={{ backgroundColor: '#feca57' }}>
                <StatusText>{donation.estado}</StatusText>
                <ExpiresIn>Expira em: {donation.prazo.split('T')[0].split('-').reverse().join('/')}</ExpiresIn>
              </Status>
            </Item>
          </Content>
        )) : (
          <Empty>Você ainda não tem nenhuma doação :(</Empty>
        )}
    </Container>
  );
}