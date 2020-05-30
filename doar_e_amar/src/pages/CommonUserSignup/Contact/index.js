import React, {useState, useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import AuthContext from '../../../auth/context';
import styles from './styles';
import api from '../../../services/api';

import Progress from '../components/Progress';

function Contact() {
  const [landline, setLandline] = useState('');
  const [cellphone, setCellphone] = useState('');

  const {signIn} = useContext(AuthContext);

  const {goBack} = useNavigation();
  const {params} = useRoute();

  async function handleSubmit() {
    const {email, password, name, cpnj, avatar, address} = params;

    const data = new FormData();

    data.append('name', name);
    data.append('password', password);
    data.append('email', email);
    data.append('cpnj', cpnj);
    data.append('avatar', avatar);
    data.append('address', address);
    data.append('landline', landline);
    data.append('cellphone', cellphone);

    try {
      const response = await api.post('/ngos', data);

      const {id} = response.data;

      AsyncStorage.setItem('user', JSON.stringify(response.data)).then(() =>
        signIn(id),
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <Progress step={4} maxSteps={4} currentStep="Contato" />

      <Text style={styles.label}>TELEFONE FIXO *</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu telefone"
        keyboardType="number-pad"
        value={landline}
        onChangeText={setLandline}
      />

      <Text style={styles.label}>CELULAR *</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu celular"
        keyboardType="number-pad"
        value={cellphone}
        onChangeText={setCellphone}
      />

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

export default Contact;
