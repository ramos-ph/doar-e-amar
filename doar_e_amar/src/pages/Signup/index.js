import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

function Signup() {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.legend}>Criar conta</Text>

      <TouchableNativeFeedback onPress={() => navigate('CommonCredentials')}>
        <View style={[styles.card, {borderColor: '#f1c40f33'}]}>
          <Icon name="smile-beam" size={86} color="#f1c40f" />

          <View style={styles.opt}>
            <Text style={[styles.title, {color: '#f1c40f'}]}>
              Quero apenas doar
            </Text>

            <View style={styles.info}>
              <Text style={styles.item}>- Para todos</Text>
              <Text style={styles.item}>- Faça o bem</Text>
              <Text style={styles.item}>- Ajude o próximo</Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback>
        <View style={styles.card}>
          <View style={styles.opt}>
            <Text style={styles.title}>Quero receber doações</Text>

            <View style={styles.info}>
              <Text style={styles.item}>- Para ONGs</Text>
              <Text style={styles.item}>- Transmita o bem</Text>
              <Text style={styles.item}>- Prático e intuitivo</Text>
            </View>
          </View>

          <Icon name="hand-holding-heart" size={86} color="#0abde3" />
        </View>
      </TouchableNativeFeedback>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigate('Signin')}>
          <Text style={[styles.footerText, styles.action]}>Acesse!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signup;
