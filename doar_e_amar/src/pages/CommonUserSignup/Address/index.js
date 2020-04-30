import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles';
import api from '../../../services/api';

import Progress from '../components/Progress';

function Address() {
  const [zipcode, setZipcode] = useState('');
  const [number, setNumber] = useState('');

  const {goBack} = useNavigation();
  const {params} = useRoute();

  async function handleSubmit() {
    const {name, email, password, cpf, picture} = params;
    const address = `${zipcode}, ${number}`;

    const data = new FormData();

    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('avatar', picture);
    data.append('cpf', cpf);
    data.append('address', address);

    try {
      await api.post('/common', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Alert.alert('OK!', 'Usuário cadastrado com sucesso!');
    } catch (err) {
      console.log({err});

      Alert.alert(
        'Ops..',
        'Ocorreu um erro ao realizar o processo. Tente novamente.',
      );
    }
  }

  return (
    <View style={styles.container}>
      <Progress step={3} maxSteps={3} currentStep="Endereçamento" />

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

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Address;
