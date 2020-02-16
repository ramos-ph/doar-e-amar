import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #FFF;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Legend = styled.Text`
  font-size: 20px;
  color: #333;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  align-self: stretch;
  margin-bottom: 5px;
  margin-left: 18px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 52px;
  padding: 0 25px;
  background: #FFF;
  border: 1px solid #DDD;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  background: #DB003F;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  text-align: center;
`;
