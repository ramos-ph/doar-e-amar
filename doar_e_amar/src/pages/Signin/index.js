import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

function Signin() {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <Text style={styles.legend}>Entrar</Text>

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
