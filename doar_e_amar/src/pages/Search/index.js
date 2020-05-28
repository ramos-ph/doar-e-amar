import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar</Text>

      <TextInput style={styles.search} placeholder="O que está procurando?" />
    </View>
  );
}

export default Search;
