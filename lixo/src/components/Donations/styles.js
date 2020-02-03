import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  padding: 10px;
`;

export const Item = styled.View`
  height: 150px;
  align-self: stretch;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ItemContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const Thumbnail = styled.ImageBackground.attrs({
  imageStyle: { borderRadius: 5 }
})`
  height: 64px;
  width: 64px;
`;

export const Info = styled.View`
  width: 55%;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2
})`
  font-size: 16px;
  color: #999;
`;

export const ExpiresIn = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
`;

export const Status = styled.View`
  height: 35px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StatusText = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
`;

export const Empty = styled.Text`
  font-size: 28px;
  color: #999;
  font-weight: bold;
`;