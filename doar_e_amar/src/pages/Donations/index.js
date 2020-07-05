import React, {useState, useReducer, useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import api from '../../services/api';

function Donations() {
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case 'RESTORE_OFFERS':
        return {
          offers: action.offers,
          allOffers: action.offers
        }
      case 'SEARCH_OFFERS':
        return {
          ...prevState,
          offers: action.searchResult
        }
      case 'CLEAR_SEARCH':
        return {
          ...prevState,
          offers: action.offers
        }
    }
  }, {
    offers: [],
    allOffers: []
  });

  const [search, setSearch] = useState('');

  const {navigate} = useNavigation();

  useEffect(() => {
    async function restoreOffers() {
      const storagedUser = await AsyncStorage.getItem('user');

      const {id} = JSON.parse(storagedUser);

      const response = await api.get('/donations', {
        headers: {
          authorization: id,
        },
      });

      dispatch({ type: 'RESTORE_OFFERS', offers: response.data });
    }

    restoreOffers();
  }, []);

  useEffect(() => {
    function searchDonations () {
      if (!search) {
        return dispatch({ type: 'CLEAR_SEARCH', offers: state.allOffers })
      }

      const result = state.allOffers.filter(offer => {
        const re = new RegExp(search, 'i')

        return re.test(offer.title)
      })

      dispatch({ type: 'SEARCH_OFFERS', searchResult: result })
    }

    searchDonations()
  }, [search])

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
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" translucent />
      <View style={styles.container}>
        <Text style={styles.legend}>Doações</Text>
        <Text style={styles.label}>Veja as mais recentes ofertas</Text>

        <TextInput
          style={styles.search}
          placeholder="Procurar ofertas"
          value={search}
          onChangeText={setSearch}
        />

        <FlatList
          data={state.offers}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          style={styles.content}
        />
      </View>
    </>
  );
}

export default Donations;
