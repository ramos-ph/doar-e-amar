import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const Header = styled.View`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  height: 33%;
  width: 100%;
  padding: 15px 25px;
`;

export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

export const Name = styled.Text`
  color: #000;
  font-size: 26px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Label = styled.Text`
  color: #333;
  font-size: 18px;
`;
