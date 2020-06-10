import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import AsyncStorage from '';
import {Text, Alert} from 'react-native';

import styles from './styles';
import api from '../../services/api';

function Receive() {
  async function onSuccess(e) {
    try {
      const storagedUser = await AsyncStorage.getItem('user');

      const {id} = JSON.parse(storagedUser);

      await api.put(`/donations/${e.data}/actions/receive`, null, {
        headers: {
          authorization: id,
        },
      });

      Alert.alert(
        'Oba!',
        'Agradecemos por usar nossa plataforma! Faça bom uso.',
      );
    } catch (err) {
      const {response = err} = err;

      return Alert.alert(
        'Ops..',
        response.status === 403
          ? 'Você não tem permissão para receber essa oferta.'
          : 'Ocorreu um erro interno. Por favor, tente novamente',
      );
    }
  }

  return (
    <QRCodeScanner
      onRead={onSuccess}
      style={styles.container}
      topContent={
        <Text style={styles.label}>
          Escaneie o QRCode da doação para confirmar o recebimento
        </Text>
      }
    />
  );
}

export default Receive;
