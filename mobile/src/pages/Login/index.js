import React, {useState, useEffect} from 'react';
import {Alert, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';
import hardwareBackPress from '../../utils/hardwareBackPress';

import cover from '../../assets/cover.jpg';

import {
  Container,
  Content,
  Legend,
  Label,
  Input,
  Button,
  ButtonText,
} from './styles';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    async function isUserLoggedIn() {
      const data = await AsyncStorage.getItem('user');

      if (data) {
        navigation.navigate('Dashboard');
      }
    }

    isUserLoggedIn();
  }, [navigation]);

  hardwareBackPress('Start', navigation);

  async function handleSubmit() {
    try {
      const response = await api.post('/sessions', {
        email,
        senha: password,
      });

      const {user, token} = response.data;

      if (!response.data.user.nome) {
        return navigation.navigate('FirstAccess', {token});
      }

      await AsyncStorage.setItem('user', JSON.stringify(user));
      await AsyncStorage.setItem('token', token);

      return navigation.navigate('Dashboard');
    } catch ({response}) {
      Alert.alert('Erro', response.data.message);
    }
  }

  return (
    <Container source={cover}>
      <StatusBar barStyle="light-content" backgroundColor="#0000" />

      <Content behavior="padding" enabled>
        <Legend>Acesse sua conta</Legend>

        <Label>SEU E-MAIL *</Label>
        <Input
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoComplete={false}
          keyboardType="email-address"
          placeholder="Seu e-mail"
          placeholderTextColor="#DDD"
        />
        <Label>SUA SENHA *</Label>
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Sua senha"
          placeholderTextColor="#DDD"
          secureTextEntry={true}
        />

        <Button onPress={handleSubmit}>
          <ButtonText>ENTRAR</ButtonText>
        </Button>
      </Content>
    </Container>
  );
}
