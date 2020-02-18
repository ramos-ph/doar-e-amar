import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  align-self: stretch;

  height: 33%;

  padding: 15px 25px;

  background: #fff;
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
  font-size: 14px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  background: #fff;
`;

export const Image = styled.Image`
  flex: 0.67;
  width: 100%;

  resize-mode: contain;
`;

export const Footer = styled.View`
  padding: 10px 15px;
`;

export const Title = styled.Text`
  color: #333;

  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #999;

  font-size: 16px;
`;
