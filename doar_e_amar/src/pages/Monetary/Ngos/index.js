import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import api from '../../../services/api';

function NGOs() {
  const [ngos, setNgos] = useState([]);

  const {navigate} = useNavigation();

  useEffect(() => {
    async function loadNgos() {
      const storagedUser = await AsyncStorage.getItem('user');

      const {id: userId} = JSON.parse(storagedUser);

      const response = await api.get('/ngos');

      const filteredResponse = response.data.filter((ngo) => ngo.id !== userId);

      setNgos(filteredResponse);
    }

    loadNgos();
  }, []);

  function renderItem({item: ngo}) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigate('Transfer', {ngo_id: ngo.id})}>
        <Image
          style={styles.avatar}
          source={{uri: `http://localhost:3001/public/uploads/${ngo.avatar}`}}
        />

        <View>
          <Text style={styles.name}>{ngo.name}</Text>
          <Text style={styles.email}>{ngo.email.split('@')[0]}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.legend}>Doação monetária</Text>
      <Text style={styles.label}>
        Escolha a ONG para realizar a transferência
      </Text>

      <FlatList
        data={ngos}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        style={styles.listContainer}
      />
    </View>
  );
}

export default NGOs;
