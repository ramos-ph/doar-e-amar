import styled from 'styled-components/native';
import {Animated, Dimensions} from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
`;

export const Content = styled.ImageBackground`
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  padding: ${Dimensions.get('window').height * 0.2}px 35px;
  transform: translateY(${Dimensions.get('window').height * -0.15}px);
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;
