import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Thumbnail = styled.ImageBackground.attrs({
  imageStyle: {borderRadius: 5},
})`
  height: 90px;
  width: 140px;
  justify-content: flex-end;
  padding: 8px;
  margin-bottom: 25px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Item = styled.View`
  width: 60%;
  height: 90px;
  padding: 5px 10px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #999;
`;
