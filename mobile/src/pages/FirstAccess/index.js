import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  AvatarButton,
  SelectedAvatar,
  Avatar,
  Label,
  Input,
  Button,
  ButtonText,
} from './styles';

import api from '../../services/api';

function FirstAccess({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avatar, setAvatar] = useState('');

  const token = navigation.getParam('token');

  function handleImagePick() {
    const options = {
      title: 'Selecionar Avatar',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'Tirar uma foto',
      chooseFromLibraryButtonTitle: 'Escolher da galeria',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      const source = {
        uri: response.uri,
        type: response.type,
        name: response.fileName,
      };

      setAvatar(source);
    });
  }

  async function handleSubmit() {
    try {
      const data = new FormData();

      data.append('firstName', firstName);
      data.append('lastName', lastName);
      data.append('avatar', avatar);

      const response = await api.put('/first-access', data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      await AsyncStorage.setItem('user', JSON.stringify(response.data));

      return navigation.navigate('Dashboard');
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  }

  return (
    <Container behavior="padding" enabled>
      {!avatar.uri ? (
        <Avatar onPress={handleImagePick}>
          <Icon name="photo-camera" size={42} color="#999" />
        </Avatar>
      ) : (
        <AvatarButton onPress={handleImagePick}>
          <SelectedAvatar source={{uri: avatar.uri}} />
        </AvatarButton>
      )}

      <Label>SEU NOME *</Label>
      <Input
        placeholder="Seu nome"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={firstName}
        onChangeText={setFirstName}
      />

      <Label>SEU SOBRENOME *</Label>
      <Input
        placeholder="Seu sobrenome"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={lastName}
        onChangeText={setLastName}
      />

      <Button onPress={handleSubmit}>
        <ButtonText>Continuar</ButtonText>
      </Button>
    </Container>
  );
}

export default FirstAccess;
