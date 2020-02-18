import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 4% 20px;
  background: #FFF;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 100px;
  resize-mode: contain;
  margin-top: 40%;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 25px;
  font-weight: 200;
`;

export const SignIn = styled.TouchableOpacity`
  height: 55px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background:  #fff;
  margin-bottom: 15px;
`;

export const SignInText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
`;

export const SignUp = styled.TouchableOpacity`
  height: 55px;
  align-self: stretch;  
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: transparent;
  border: 2px solid #fff;
`;

export const SignUpText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;