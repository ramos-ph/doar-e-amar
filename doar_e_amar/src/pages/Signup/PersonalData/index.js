import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles';

import Progress from '../components/Progress';

function PersonalData() {
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [picture, setPicture] = useState(null);

  const {navigate, goBack} = useNavigation();
  const {params} = useRoute();

  function proceedSignup() {
    if (cnpj.length !== 14) {
      return Alert.alert('Ops..', 'Insira um CNPJ válido.');
    }

    return navigate('Address', {
      ...params,
      name,
      cnpj,
      avatar: picture,
    });
  }

  function chooseAvatar() {
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

  return (
    <View style={styles.container}>
      <Progress
        step={2}
        maxSteps={4}
        currentStep="Dados organizacionais"
        nextStep="Endereçamento"
      />

      <View style={styles.content}>
        <TouchableOpacity style={styles.avatar} onPress={chooseAvatar}>
          {picture === null ? (
            <Icon name="camera" size={32} color="#999" />
          ) : (
            <Image source={picture} style={styles.picture} />
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>SUA RAZÃO SOCIAL *</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua razão social"
        keyboardType="default"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>SEU CNPJ *</Text>
      <TextInput
        style={styles.input}
        placeholder="Somente números"
        keyboardType="number-pad"
        value={cnpj}
        onChangeText={setCnpj}
      />

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

export default PersonalData;
