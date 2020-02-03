import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled(Animated.View)`
  height: 55%;
  padding: 20px;
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  bottom: 0;
  align-self: stretch;
  background: #FFF;
  align-self: flex-end;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #333;
  font-weight: bold;
  margin: 10px 20px;
  align-self: stretch;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 6
})`
  font-size: 16px;
  color: #999;
  line-height: 20px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  align-self: stretch;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  color: #00ed68;
  font-size: 16px;
  text-align: right;
`;