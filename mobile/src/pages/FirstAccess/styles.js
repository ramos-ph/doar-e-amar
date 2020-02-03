import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: #fff;
  padding: 0 20px;
`;

export const AvatarButton = styled.TouchableOpacity``;

export const SelectedAvatar = styled.Image`
  height: 150px;
  width: 150px;

  margin-bottom: 50px;
  
  border-radius: 75px;
`;

export const Avatar = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;

  margin-bottom: 50px;

  border-width: 1px;
  border-style: dashed;
  border-color: #999;
  border-radius: 75px;
`;

export const Label = styled.Text`
  align-self: stretch;

  font-size: 14px;
  font-weight: bold;

  text-transform: uppercase;

  margin-left: 15px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  align-self: stretch;

  height: 52px;


  margin-bottom: 30px;
  padding: 0 25px;

  border-width: 1px;
  border-style: solid;
  border-color: #ddd;
  border-radius: 26px;
`;

export const Button = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  justify-content: center;

  height: 52px;

  background: #FFF;

  border: 1px solid #DB003F;
  border-radius: 26px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  
  color: #DB003F;
`;