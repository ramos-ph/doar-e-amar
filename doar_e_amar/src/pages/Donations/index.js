import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  ToastAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import socketio from 'socket.io-client';

import styles from './styles';
import api from '../../services/api';

function Donations() {
  const [offers, setOffers] = useState([]);

  const {navigate} = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('user').then((storagedUser) => {
      const {id} = JSON.parse(storagedUser);

      const socket = socketio('http://localhost:3001/', {
        query: {
          userId: id,
        },
      });

      socket.on('new_donation', () => {
        ToastAndroid.show('Novas ofertas', ToastAndroid.SHORT);
      });

      socket.on('donation_accepted', (donation) => {
        const filteredOffers = offers.filter((offer) => {
          return offer.id !== donation.id;
        });

        setOffers(filteredOffers);
      });
    });
  }, [offers]);

  useEffect(() => {
    async function restoreOffers() {
      const storagedUser = await AsyncStorage.getItem('user');

      const {id} = JSON.parse(storagedUser);

      const response = await api.get('/donations', {
        headers: {
          authorization: id,
        },
      });

      setOffers(response.data);
    }

    restoreOffers();
  }, []);

  function renderItem({item}) {
    return (
      <TouchableOpacity
        style={styles.item}
        key={item.id}
        onPress={() => navigate('Details', item)}>
        <Image
          style={styles.image}
          source={{
            uri: `http://localhost:3001/public/uploads/${item.common_donation.picture}`,
          }}
        />

        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{item.category.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.legend}>Doações</Text>
      <Text style={styles.label}>Veja as mais recentes ofertas</Text>
      <FlatList
        data={offers}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        style={styles.content}
      />
    </View>
  );
}

export default Donations;
