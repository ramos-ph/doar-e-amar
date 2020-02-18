import React, {useState} from 'react';
import {BackHandler} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {SearchForm, Input, Button} from './styles';

function Map({navigation}) {
  const [search, setSearch] = useState('');

  BackHandler.addEventListener('hardwareBackPress', async function() {
    navigation.navigate('Dashboard');

    return false;
  });

  return (
    <>
      <MapView
        initialRegion={{
          latitude: -23.5442412,
          longitude: -46.921837,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{flex: 1}}
      />

      <SearchForm>
        <Input
          placeholder="Procurar ONG"
          placeholderTextColor="#DDD"
          autoCapitalize="words"
          autoCorrect={false}
          value={search}
          onChangeText={setSearch}
        />

        <Button>
          <Icon name="my-location" size={28} color="#FFF" />
        </Button>
      </SearchForm>
    </>
  );
}

export default Map;
