import React, {useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import {colors} from '../../styles';
import MainCover from '../../assets/img/main.jpg';
import AuthContext from '../../auth/context';

function Main() {
  const {signOut} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF0" barStyle="light-content" translucent />

      <Image source={MainCover} style={styles.image} />

      <ScrollView
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.card}>
          <Icon name="grid" size={38} color={colors.tertiary} />
          <Text style={styles.cardText}>Minhas doações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="heart" size={38} color={colors.primary} />
          <Text style={styles.cardText}>Nova doação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="search" size={38} color={colors.success} />
          <Text style={styles.cardText}>Ver ofertas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="settings" size={38} color={colors.infoDark} />
          <Text style={styles.cardText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={signOut}>
          <Icon name="power" size={38} color={colors.warning} />
          <Text style={styles.cardText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Main;
