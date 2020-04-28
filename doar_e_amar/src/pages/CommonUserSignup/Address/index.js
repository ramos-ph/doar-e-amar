import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

import Progress from '../components/Progress';

function Address() {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <Progress step={3} maxSteps={3} currentStep="Endereçamento" />

      <Text style={styles.label}>SEU ENDEREÇO *</Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={[styles.input, {width: '70%'}]}
          placeholder="CEP (Somente números)"
          keyboardType="number-pad"
        />
        <TextInput style={[styles.input, {width: '25%'}]} placeholder="Nº" />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#ddd'}]}
          onPress={() => goBack()}>
          <Text style={[styles.buttonText, {color: '#666'}]}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Address;
