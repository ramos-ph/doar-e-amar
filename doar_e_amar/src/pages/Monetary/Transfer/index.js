import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import api from '../../../services/api';

function Transfer() {
  const [title, setTitle] = useState('Faça bom uso!');
  const [value, setValue] = useState('');

  const {goBack, navigate} = useNavigation();
  const {params} = useRoute();

  async function handleSubmit() {
    const storagedUser = await AsyncStorage.getItem('user');

    const {id: userId} = JSON.parse(storagedUser);

    await api.post(
      `/monetary?ngo_id=${params.ngo_id}`,
      {
        title,
        value,
      },
      {
        headers: {
          authorization: userId,
        },
      },
    );

    Alert.alert('Oba!', 'Agradecemos pela sua doação!');

    return navigate('Donations', {screen: 'Donations'});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.legend}>Doação monetária</Text>

      <Text style={styles.label}>VALOR *</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Apenas quantia"
        keyboardType="number-pad"
      />

      <Text style={styles.label}>MENSAGEM *</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Deixe uma mensagem!"
      />

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#ddd'}]}
          onPress={goBack}>
          <Text style={[styles.buttonText, {color: '#666'}]}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Transfer;
