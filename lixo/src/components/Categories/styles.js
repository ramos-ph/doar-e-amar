import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
  max-height: 120px;
`;

export const Thumbnail = styled.ImageBackground.attrs({
  imageStyle: {borderRadius: 5},
})`
  height: 90px;
  width: 150px;
  margin-right: 10px;
  justify-content: flex-end;
  padding: 8px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
