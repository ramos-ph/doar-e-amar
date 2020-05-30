import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import api from '../../services/api';

function Donations() {
  const [offers, setOffers] = useState([]);

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
      <View style={styles.item} key={item.id}>
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
      </View>
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
