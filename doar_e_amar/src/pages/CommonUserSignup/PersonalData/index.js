import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

import Progress from '../components/Progress';

function PersonalData() {
  const {navigate, goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <Progress
        step={2}
        maxSteps={3}
        currentStep="Dados pessoais"
        nextStep="Endereçamento"
      />

      <Text style={styles.label}>SEU NOME *</Text>
      <TextInput style={styles.input} placeholder="Seu nome" />

      <Text style={styles.label}>SEU CPF *</Text>
      <TextInput style={styles.input} placeholder="Seu CPF" />

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#ddd'}]}
          onPress={() => goBack()}>
          <Text style={[styles.buttonText, {color: '#666'}]}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PersonalData;
