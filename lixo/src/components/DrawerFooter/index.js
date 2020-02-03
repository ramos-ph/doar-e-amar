import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigation} from 'react-navigation';

import {
  Container,
  Content,
  Options,
  LogOutButton,
  LogOutButtonText,
  UserName,
  Avatar,
} from './styles';

function DrawerFooter({navigation}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUser() {
      const data = await AsyncStorage.getItem('user');

      setUser(JSON.parse(data));
    }

    loadUser();
  }, []);

  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate('Login');
  }

  return (
    <Container>
      <Content>
        <Options>
          <LogOutButton onPress={handleLogout}>
            <LogOutButtonText>SAIR</LogOutButtonText>
          </LogOutButton>
          <UserName>{user.nome}</UserName>
        </Options>

        <Avatar source={{uri: user.avatar_url}} />
      </Content>
    </Container>
  );
}

export default withNavigation(DrawerFooter);
