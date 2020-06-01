import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles';
import api from '../../../services/api';

function Donation() {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [picture, setPicture] = useState(null);

  const {goBack, navigate} = useNavigation();
  const {params} = useRoute();

  function choosePicture() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      const {uri, type, fileName} = response;

      setPicture({
        uri,
        type,
        name: fileName,
      });
    });
  }

  async function handleSubmit() {
    const storagedUser = await AsyncStorage.getItem('user');
    const {id: userId} = JSON.parse(storagedUser);
    const {categoryId} = params;
    const data = new FormData();

    data.append('title', title);
    data.append('address', address);
    data.append('picture', picture);

    await api.post(`/donations/?category_id=${categoryId}`, data, {
      headers: {
        authorization: userId,
      },
    });

    Alert.alert('Obrigado!', 'Sua nova doação foi publicada com sucesso!');

    return navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.legend}>Faça sua doação</Text>

      <Text style={styles.label}>Foto do objeto *</Text>
      <TouchableOpacity style={styles.preview} onPress={choosePicture}>
        {picture?.uri ? (
          <Image source={{uri: picture.uri}} style={styles.imagePreview} />
        ) : (
          <Icon name="camera" size={32} color="#999" />
        )}
      </TouchableOpacity>

      <Text style={styles.label}>Título *</Text>
      <TextInput
        style={styles.input}
        placeholder="O que está doando?"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Endereço para retirada *</Text>
      <TextInput
        style={styles.input}
        placeholder="Qual o local para retirada?"
        value={address}
        onChangeText={setAddress}
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

export default Donation;
