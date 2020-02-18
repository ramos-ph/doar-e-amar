import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Legend = styled.Text`
  font-size: 22px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  align-self: stretch;
  margin-bottom: 5px;
  margin-left: 18px;
`;

export const Info = styled.Text`
  font-size: 11px;
  color: #333;
  font-weight: 400;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 52px;
  padding: 0 25px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 40px;
  height: 52px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;