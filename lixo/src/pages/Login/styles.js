import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    left: 15,
    height: 50,
  }
});

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #FFF;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #333;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  z-index: -999;
  height: 46px;
  padding: 0 20px 0 55px;
  background: #FFF;
  border: 1px solid #DDD;
  border-radius: 23px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  background: #DB003F;
  border-radius: 23px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  text-align: center;
`;

export const OptionsContainer = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
`;

export const Option = styled.Text`
  font-size: 14px;
  color: #111;
  font-weight: bold;
`;