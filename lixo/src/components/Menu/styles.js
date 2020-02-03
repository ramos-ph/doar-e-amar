import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  height: 200px;
  padding: 30px 10px;
  align-items: center;
  justify-content: center;
  background: #FFF;
  opacity: 1;
`;

export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})``;

export const Item = styled.View`
  height: 90px;
  width: 150px;
  background: #A83856;
  border-radius: 4px;
  justify-content: space-between;
  padding: 8px;
  margin-right: 10px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #FFF;
`;