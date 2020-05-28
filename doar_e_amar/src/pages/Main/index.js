import React from 'react';
import {View, Image, StatusBar} from 'react-native';

import styles from './styles';
import MainCover from '../../assets/img/main.jpg';

function Main() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF0" barStyle="dark-content" translucent />

      <Image source={MainCover} style={styles.image} />
    </View>
  );
}

export default Main;
