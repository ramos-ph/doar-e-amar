import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background: #FFF;
`;

export const Logo = styled.Image`
  height: 80px;
  resize-mode: contain;
  margin-bottom: 20px;
`;

export const SignIn = styled.TouchableOpacity`
  height: 55px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background:  #DB003F;
  margin-bottom: 15px;
`;

export const SignInText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #FFF;
`;

export const SignUp = styled.TouchableOpacity`
  height: 55px;
  align-self: stretch;  
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #FFF;
  border: 1px solid #DB003F;
`;

export const SignUpText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #DB003F;
`;