import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Panel from '../../components/Panel';
import Menu from '../../components/Menu';

import {
  Container,
  Content,
  Title,
  Description,
  Button,
  ButtonText,
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
          <Title>O que doar?</Title>
          <Description>
            {'\t\t'}Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Earum quibusdam iste ratione temporibus enim harum asperiores
            dignissimos rem tenetur laborum. Quos ratione, itaque distinctio
            maxime et molestias quibusdam nesciunt expedita?
          </Description>

          <Button>
            <ButtonText>SAIBA MAIS</ButtonText>
            <Icon name="keyboard-arrow-right" size={16} color="#00ed68" />
          </Button>
        </Content>
      </PanGestureHandler>
    </Container>
  );
}
