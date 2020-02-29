import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Panel from '../../components/Panel';
import Menu from '../../components/Menu';

import {
  Container,
	Content,
	News,
	Article,
  Title,
	Info,
	Author,
	Category,
} from './styles';

export default function Dashboard() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  function onHandlerStateChanged(e) {
    if (e.nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = e.nativeEvent;

      offset += translationY;

      translateY.setOffset(offset);
      translateY.setValue(0);
    }
  }

  return (
    <Container>
      <Panel translateY={translateY} />

      <Menu translateY={translateY} />

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}>
        <Content
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-200, 0],
                  outputRange: [-200, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Icon name="keyboard-arrow-up" size={28} color="#999" />

					<News>
						<Article>
							<Title>Doação de artigos para pets é a categoria mais popular</Title>

							<Info>
								<Author>D&A em 29/02/2020</Author>
								<Category>PETS</Category>
							</Info>
						</Article>

						<Article>
							<Title>Amável contribuição das Lojas Duzentos</Title>

							<Info>
								<Author>D&A em 20/02/2020</Author>
								<Category>MÓVEIS</Category>
							</Info>
						</Article>

						<Article>
							<Title>Dinheiro doado já arreacada mais de R$8000</Title>

							<Info>
								<Author>D&A em 18/02/2020</Author>
								<Category>DINHEIRO</Category>
							</Info>
						</Article>
					</News>
        </Content>
      </PanGestureHandler>
    </Container>
  );
}
