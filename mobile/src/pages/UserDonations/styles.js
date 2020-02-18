import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

  height: 140px;

  padding: 0 25px;

  background: #fff;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;

  border-radius: 32px;
`;

export const Info = styled.View`
  margin-left: 25px;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const Donations = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: 400;
`;
