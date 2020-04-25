import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

import cover from '../../assets/img/cover.jpg';
import logo from '../../assets/img/logo.png';

function Start() {
  const {navigate} = useNavigation();

  return (
    <ImageBackground style={styles.container} source={cover}>
      <StatusBar
        backgroundColor="#0000"
        barStyle="light-content"
        translucent={true}
      />

      <View style={styles.content}>
        <Image style={styles.logo} source={logo} />

        <Text style={styles.label}>
          Porque há maior alegria em dar do que receber
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigate('Signin')}
        style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigate('Signup')}
        style={[styles.button, styles.altButton]}>
        <Text style={[styles.buttonText, styles.altButtonText]}>
          Cadastre-se
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default Start;
