import React from 'react';

import { Container, Logo, SignIn, SignInText, SignUp, SignUpText } from './styles';

import logo from '../../assets/logo.png';

export default function Start({ navigation }) {
  return (
    <Container>
      <Logo source={logo} />

      <SignIn onPress={() => {navigation.navigate('Login')}}>
        <SignInText>ENTRAR</SignInText>
      </SignIn>

      <SignUp onPress={() => {navigation.navigate('Signup')}}>
        <SignUpText>CADASTRE-SE</SignUpText>
      </SignUp>
    </Container>
  );
}