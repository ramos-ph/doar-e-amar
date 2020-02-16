import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 15px;
  background: #FFF;
`;

export const Search = styled.TextInput`
  align-self: stretch;
  height: 40px;
  background: #DDD;
  color: #222;
  border-radius: 4px;
  padding: 0 15px;
  margin: 40px 0 15px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-left: 8px;
  margin-bottom: 10px;
`;