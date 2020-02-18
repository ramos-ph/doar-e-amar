import styled from 'styled-components/native';

export const SearchForm = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  flex-direction: row;
  z-index: 5;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 54px;
  border-radius: 27px;
  background: #fff;
  color: #333;
  font-size: 16px;
  padding: 0 25px;
  elevation: 2;
`;

export const Button = styled.TouchableOpacity`
  height: 54px;
  width: 54px;
  border-radius: 27px;
  align-items: center;
  justify-content: center;
  background: #ff9900;
  margin-left: 10px;
  elevation: 2;
`;
