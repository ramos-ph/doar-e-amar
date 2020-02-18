import React from 'react';
import {StatusBar} from 'react-native';

import {
  Container,
  Wrapper,
  Logo,
  Label,
  SignIn,
  SignInText,
  SignUp,
  SignUpText,
} from './styles';

import logo from '../../assets/logo.png';
import cover from '../../assets/cover.jpg';

export default function Start({navigation}) {
  return (
    <Container source={cover}>
      <StatusBar barStyle="light-content" backgroundColor="#0000" />

      <Wrapper>
        <Logo source={logo} />
        <Label>Porque há maior alegria em dar do que receber!</Label>
      </Wrapper>

      <SignIn
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <SignInText>ENTRAR</SignInText>
      </SignIn>

      <SignUp
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        <SignUpText>CADASTRE-SE</SignUpText>
      </SignUp>
    </Container>
  );
}
