/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

function Categories() {
  const {navigate} = useNavigation();

  const CATEGORIES_IDS = {
    alimentos: 1,
    moveis: 2,
    medicamentos: 4,
    outros: 5,
  };

  function handleNavigate(categoryId) {
    return navigate('Donation', {categoryId});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.legend}>Escolha uma categoria</Text>

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={[styles.card, {borderColor: '#cc000077'}]}
          onPress={() => handleNavigate(CATEGORIES_IDS.alimentos)}>
          <View style={styles.cardIcon}>
            <Icon name="utensils" size={48} color="#cc0000" />
            <Text style={[styles.categoryName, {color: '#cc0000'}]}>
              Alimentos
            </Text>
          </View>

          <View style={styles.cardInfo}>
            <Text numberOfLines={3} style={styles.description}>
              Contamos com a você para doar alimentos não perecíveis!
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, {borderColor: '#ffc10777'}]}
          onPress={() => handleNavigate(CATEGORIES_IDS.moveis)}>
          <View style={styles.cardIcon}>
            <Icon name="couch" size={48} color="#ffc107" />
            <Text style={[styles.categoryName, {color: '#ffc107'}]}>
              Móveis
            </Text>
          </View>

          <View style={styles.cardInfo}>
            <Text numberOfLines={3} style={styles.description}>
              Doe móveis em boas condições de uso; gere conforto à quem mais
              precisa!
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, {borderColor: '#00e5ff77'}]}
          onPress={() => handleNavigate(CATEGORIES_IDS.medicamentos)}>
          <View style={styles.cardIcon}>
            <Icon name="medkit" size={48} color="#00e5ff" />
            <Text style={[styles.categoryName, {color: '#00e5ff'}]}>
              Medicamentos
            </Text>
          </View>

          <View style={styles.cardInfo}>
            <Text numberOfLines={3} style={styles.description}>
              Doe medicamentos com o prazo de validade em dia; consulte o seu
              médico!
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, {borderColor: '#e91e6377'}]}
          onPress={() => handleNavigate(CATEGORIES_IDS.outros)}>
          <View style={styles.cardIcon}>
            <Icon name="boxes" size={48} color="#e91e63" />
            <Text style={[styles.categoryName, {color: '#e91e63'}]}>
              Outros
            </Text>
          </View>

          <View style={styles.cardInfo}>
            <Text numberOfLines={3} style={styles.description}>
              De vestimentas a produtos para pets, doe de coração aqui!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Categories;
