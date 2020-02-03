import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  styles,
  Container,
  Title,
  InputContainer,
  Input,
  Button,
  ButtonText,
  OptionsContainer,
  Option,
} from './styles';

import api from '../../services/api';

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

  async function handleSubmit() {
    try {
      const response = await api.post('/sessions/start', {
        email,
        senha: password,
      });

      const {user, token} = response.data;

      await AsyncStorage.setItem('user', JSON.stringify(user));
      await AsyncStorage.setItem('token', token);

      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Erro de autenticação', 'Usuário ou senha inválidos');
    }
  }

  return (
    <Container behavior="padding">
      <Title>Acesse sua conta</Title>

      <InputContainer>
        <Icon name="email" size={28} color="#222" style={styles.icon} />
        <Input
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoComplete={false}
          keyboardType="email-address"
          placeholder="Seu e-mail"
          placeholderTextColor="#DDD"
        />
      </InputContainer>

      <InputContainer>
        <Icon name="lock" size={28} color="#222" style={styles.icon} />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Sua senha"
          placeholderTextColor="#DDD"
          secureTextEntry={true}
        />
      </InputContainer>

      <Button onPress={handleSubmit}>
        <ButtonText>ENTRAR</ButtonText>
      </Button>

      <OptionsContainer>
        <Option>Esqueci minha senha</Option>
        <Option>Cadastre-se</Option>
      </OptionsContainer>
    </Container>
  );
}
