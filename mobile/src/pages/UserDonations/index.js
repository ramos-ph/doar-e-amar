import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import DonationList from '../../components/Donations';

import {Container, Header, Avatar, Info, Name, Donations} from './styles';

export default function UserDonations() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const data = await AsyncStorage.getItem('user');

      setUser(JSON.parse(data));
    }

    loadUser();
  }, []);

  return (
    <Container>
      <Header>
        <Avatar source={{uri: user && user.avatar_url}} />

        <Info>
          <Name>{user && user.nome}</Name>
          <Donations>Doações realizadas: 0</Donations>
        </Info>
      </Header>

      <DonationList />
    </Container>
  );
}
