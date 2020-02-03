import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {Container, Header, Avatar, Name, Label} from './styles';

export default function Profile() {
  const [user, setUser] = useState({});

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
        <Avatar
          source={{
            uri: 'https://avatars0.githubusercontent.com/u/50644753?v=4',
          }}
        />

        <Name>{user.nome}</Name>
        <Label>Itapevi, SP</Label>
      </Header>
    </Container>
  );
}
