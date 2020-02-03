import React, {useState} from 'react';
import {Alert, BackHandler} from 'react-native';

import {Container, Legend, Label, Info, Input, Button, ButtonText} from './styles';

import api from '../../services/api';
import hardwareBackPress from '../../utils/hardwareBackPress';

function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');

  hardwareBackPress('Start', navigation);

  async function handleSubmit() { 
    try {
      const response = await api.post('/sessions/create', {
        email,
        senha: password,
        cpf
      });

      return navigation.navigate('FirstAccess', {token: response.data.token});
    } catch({ response }) {
      Alert.alert('Erro', response.data.message);
    }
  }

  return (
    <Container behavior="padding" enabled>
      <Legend>Cadastre-se</Legend>

      <Label>SEU E-MAIL *</Label>
      <Input
        placeholder="Seu e-mail"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Label>SUA SENHA *</Label>
      <Input
        placeholder="Sua senha"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Label>SEU CPF * <Info>(SOMENTE NÚMEROS)</Info></Label>
      <Input
        placeholder="Seu CPF"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={cpf}
        onChangeText={setCpf}
      />

      <Button onPress={handleSubmit}>
        <ButtonText>CADASTRAR</ButtonText>
      </Button>
    </Container>
  );
}

export default Signup;