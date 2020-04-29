import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import api from '../../services/api';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {navigate} = useNavigation();

  async function handleSubmit() {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      console.log(response.data);

      Alert.alert('OK!', 'Autenticado com sucesso!');
    } catch (err) {
      const {response = err} = err;

      Alert.alert(
        'Ops..',
        response.status === 404
          ? 'E-mail ou senha inválidos'
          : 'Ocorreu um erro ao tentar realizar o processo. Tente novamente.',
      );
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.legend}>Entrar</Text>

      <Text style={styles.label}>Seu e-mail *</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Seu e-mail"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Sua senha *</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Sua senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Ainda não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigate('Signup')}>
          <Text style={[styles.footerText, styles.action]}>Cadastre-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signin;
