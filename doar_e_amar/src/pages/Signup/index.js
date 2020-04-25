import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

function Signup() {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.legend}>Criar conta</Text>

      <Text style={styles.label}>Seu nome *</Text>
      <TextInput style={styles.input} placeholder="Nome e sobrenome" />

      <Text style={styles.label}>Seu e-mail *</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Sua senha *</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigate('Signin')}>
          <Text style={[styles.footerText, styles.action]}>Acesse!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signup;
