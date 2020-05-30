import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';
import styles from './styles';

function Details() {
  const [donator, setDonator] = useState(null);

  const {params: donation} = useRoute();

  useEffect(() => {
    async function restoreDonator() {
      const storagedUser = await AsyncStorage.getItem('user');

      const {id} = JSON.parse(storagedUser);

      const response = await api.get(`/donations/${donation.id}`, {
        headers: {
          authorization: id,
        },
      });

      setDonator(response.data.donator);
    }

    restoreDonator();
  }, [donation]);

  async function handleAcceptance() {
    try {
      const storagedUser = await AsyncStorage.getItem('user');

      const {id} = JSON.parse(storagedUser);

      await api.put(`/donations/${donation.id}/actions/accept`, null, {
        headers: {
          authorization: id,
        },
      });

      Alert.alert('OK!', `${donation.title} foi aceita com sucesso!`);
    } catch (err) {
      const {response = err} = err;

      Alert.alert(
        'Ops..',
        response.status === 403
          ? 'Por enquanto, você não tem permissão para aceitar doações.\n\nSaiba mais sobre nossa assinatura.'
          : 'Houve um erro ao tentar realizar o processo.',
      );
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{
          uri: `http://localhost:3001/public/uploads/${donation.common_donation.picture}`,
        }}
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {donation.title}
        </Text>

        <Text style={styles.label}>Categoria</Text>
        <Text style={styles.info}>{donation.category.name}</Text>

        <Text style={styles.label}>Retirar em</Text>
        <Text style={styles.info} numberOfLines={1}>
          {donation.common_donation.pickup_address}
        </Text>

        <Text style={styles.label}>Doado por</Text>
        <Text style={styles.info}>{donator?.name || 'Aguarde...'}</Text>

        <TouchableOpacity style={styles.button} onPress={handleAcceptance}>
          <Text style={styles.buttonText}>Aceitar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Details;
