import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 20px;

  background: #fff;
`;

export const PictureContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;

  margin-bottom: 20px;

  border: 1px dashed #999;
  border-radius: 75px;
`;

export const Picture = styled.Image`
  height: 150px;
  width: 150px;

  border-radius: 75px;
`;

export const Label = styled.Text`
  align-self: stretch;

  margin: 5px 0;
  margin-left: 15px;

  font-size: 16px;
  font-weight: bold;

  text-transform: uppercase;
`;

export const Input = styled.TextInput`
  align-self: stretch;

  height: 54px;

  margin-bottom: 15px;
  padding: 0 25px;

  border: 1px solid #ddd;
  border-radius: 26px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 40px;

  height: 52px;

  background: #fff;

  border: 1px solid #db003f;
  border-radius: 26px;
`;

export const ButtonText = styled.Text`
  color: #db003f;

  font-size: 16px;
  font-weight: bold;

  text-align: center;
  text-transform: uppercase;
`;
