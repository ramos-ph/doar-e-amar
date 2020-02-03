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
      <Content>
        {donations.length > 0 ?
          donations.map(donation => (
            <Item key={donation._id}>
              <ItemContent>
                <Thumbnail source={donation.foto} />

                <Info>
                  <Title>{donation.titulo}</Title>
                  <Description>{donation.descricao}</Description>
                </Info>

                <Title>Code</Title>

              </ItemContent>

              <Status style={{ backgroundColor: '#00EB69' }}>
                <StatusText>{donation.estado}</StatusText>
                <ExpiresIn>{donation.expiraEm}</ExpiresIn>
              </Status>
            </Item>
          )) : (
            <Empty>Você ainda não tem nenhuma doação</Empty>
          )}
      </Content>
    </Container>
  );
}