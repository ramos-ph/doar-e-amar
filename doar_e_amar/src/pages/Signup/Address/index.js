import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles';

import Progress from '../components/Progress';

function Address() {
  const [zipcode, setZipcode] = useState('');
  const [number, setNumber] = useState('');

  const {navigate, goBack} = useNavigation();
  const {params} = useRoute();

  async function proceedSignup() {
    const address = `${zipcode}, ${number}`;

    navigate('Contact', {
      ...params,
      address,
    });
  }

  return (
    <View style={styles.container}>
      <Progress
        step={3}
        maxSteps={4}
        currentStep="Endereçamento"
        nextStep="Contato"
      />

      <Text style={styles.label}>SEU ENDEREÇO *</Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={[styles.input, {width: '70%'}]}
          placeholder="CEP (Somente números)"
          keyboardType="number-pad"
          value={zipcode}
          onChangeText={setZipcode}
        />
        <TextInput
          style={[styles.input, {width: '25%'}]}
          placeholder="Nº"
          keyboardType="number-pad"
          value={number}
          onChangeText={setNumber}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#ddd'}]}
          onPress={() => goBack()}>
          <Text style={[styles.buttonText, {color: '#666'}]}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={proceedSignup}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Address;
