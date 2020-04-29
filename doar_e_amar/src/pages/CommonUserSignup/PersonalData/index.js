import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
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

      <View style={styles.content}>
        <TouchableOpacity style={styles.avatar}>
          <Icon name="camera" size={32} color="#999" />
        </TouchableOpacity>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>SEU NOME *</Text>

          <TextInput style={styles.input} placeholder="Seu nome" />
          <TextInput style={styles.input} placeholder="Sobrenome" />
        </View>
      </View>

      <Text style={styles.label}>SEU CPF *</Text>
      <TextInput style={styles.input} placeholder="Seu CPF" />

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#ddd'}]}
          onPress={() => goBack()}>
          <Text style={[styles.buttonText, {color: '#666'}]}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Address')}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PersonalData;
