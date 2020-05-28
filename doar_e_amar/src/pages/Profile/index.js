import React, {useState, useMemo} from 'react';
import {View, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

function Profile() {
  const [user, setUser] = useState(storagedUser);

  const storagedUser = useMemo(() => {
    AsyncStorage.getItem('user').then((response) => {
      setUser(JSON.parse(response));
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{uri: `http://localhost:3001/public/uploads/${user?.avatar}`}}
      />

      <Text style={styles.title}>{user?.name}</Text>
      <Text style={styles.info}>{user?.email}</Text>
    </View>
  );
}

export default Profile;
