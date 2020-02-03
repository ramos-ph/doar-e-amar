import React from 'react';

import { Container, Logo, SignIn, SignInText, SignUp, SignUpText } from './styles';

import logo from '../../assets/logo.png';

export default function Start({ navigation }) {
  function handleNavigate() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Logo source={logo} />

      <SignIn onPress={handleNavigate}>
        <SignInText>ENTRAR</SignInText>
      </SignIn>

      <SignUp>
        <SignUpText>CADASTRE-SE</SignUpText>
      </SignUp>
    </Container>
  );
}