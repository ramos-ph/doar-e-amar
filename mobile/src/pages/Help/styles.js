import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 45px 20px;
  background: #fff;
`;

export const Legend = styled.Text`
  font-size: 26px;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
  align-self: stretch;
  margin-top: 50px;
`;

export const Item = styled.View`
  height: 60px;
  align-self: stretch;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 0 15px;

  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const ItemText = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;

export const About = styled.View`
  flex: 1;
`;

export const AboutText = styled.Text`
  color: #999;
  font-size: 17px;
  margin: 10px 40px 0 40px;
  text-align: center;
`;

export const Contributors = styled.ScrollView.attrs({
  vertical: true,
  showsVerticalScrollIndicator: false,
})`
  align-self: center;
  margin: 20px 0;
`;

export const Contributor = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
`;

export const Name = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;
