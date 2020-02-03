import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';

import {Container, PictureContainer, Picture, Label, Input, Button, ButtonText} from './styles';

import api from '../../services/api';
import hardwareBackPress from '../../utils/hardwareBackPress';

function New({navigation}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState({});

  const category = navigation.getParam('category');

  hardwareBackPress('Donate', navigation);

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

    ImagePicker.showImagePicker(options, (response) => {
        const source = {
          uri: response.uri,
          type: response.type,
          name: response.fileName
        };

        setAvatar(source);
      }
    )
  }

  async function handleSubmit() {
    
  }

  return (
    <Container behavior="padding" enabled>
      <PictureContainer onPress={handleImagePick}>
      {!avatar.uri ? (
        <Icon name="photo-camera" size={42} color="#999" />
        ) : (
        <Picture source={{uri: avatar.uri}} />
      )}
      </PictureContainer>

      <Label>Título *</Label>
      <Input />

      <Label>Descrição *</Label>
      <Input />

      <Button>
        <ButtonText>Continuar</ButtonText>
      </Button>
    </Container>
  );
}

export default New;