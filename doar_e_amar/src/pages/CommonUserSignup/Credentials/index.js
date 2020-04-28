import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

import Progress from '../components/Progress';

function Credentials() {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Progress
        step={1}
        maxSteps={3}
        currentStep="Credenciais de acesso"
        nextStep="Dados pessoais"
      />

      <Text style={styles.label}>SEU E-MAIL *</Text>
      <TextInput style={styles.input} placeholder="Seu e-mail" />

      <Text style={styles.label}>SUA SENHA *</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        secureTextEntry={true}
      />

      <Text style={styles.label}>CONFIRME SUA SENHA *</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        secureTextEntry={true}
      />

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('CommonPersonalData')}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Credentials;
