import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 2%;
`;

export const Item = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 25px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #111;
  font-weight: 100;
  margin-left: 20px;
  text-transform: uppercase;
`;