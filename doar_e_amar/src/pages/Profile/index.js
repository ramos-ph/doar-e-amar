import React, {useState, useMemo, useContext} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import AuthContext from '../../auth/context';
import styles from './styles';

function Profile() {
  const [user, setUser] = useState(storagedUser);

  const storagedUser = useMemo(() => {
    AsyncStorage.getItem('user').then((response) => {
      setUser(JSON.parse(response));
    });
  }, []);

  const {signOut} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{uri: `http://localhost:3001/public/uploads/${user?.avatar}`}}
      />

      <Text style={styles.title}>{user?.name}</Text>
      <Text style={styles.info}>{user?.email}</Text>

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
