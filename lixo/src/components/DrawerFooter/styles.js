import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 90%;
  height: 100%;
  border-style: solid;
  border-top-width: 1px;
  border-top-color: #ddd;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
`;

export const Options = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const LogOutButton = styled.TouchableOpacity``;

export const LogOutButtonText = styled.Text`
  font-size: 16px;
  color: #111;
  font-weight: bold;
  text-transform: uppercase;
`;

export const UserName = styled.Text`
  font-size: 16px;
  font-weight: 100;
  color: #111;
`;

export const Avatar = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 24px;
`;
