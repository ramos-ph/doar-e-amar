import styled from 'styled-components/native';
import {Animated} from 'react-native';

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
  background: #fff;
  align-self: flex-end;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  align-items: center;
  justify-content: flex-start;
`;

export const News = styled.View``;

export const Article = styled.TouchableOpacity`
	height: 120px;
	justify-content: space-between;
	padding: 15px 10px;
	border-bottom-width: 1px;
	border-bottom-color: #ddd;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  align-self: stretch;
`;

export const Info = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-top: 10px;
`;

export const Author = styled.Text`
	font-size: 12px;
	color: #333;
`;

export const Category = styled.Text`
	font-size: 12px;
	color: #666;
	text-transform: uppercase;
	border-bottom-width: 1px;
	border-bottom-color: #666;
`;
