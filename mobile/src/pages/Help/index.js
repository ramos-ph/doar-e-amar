import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import avatar1 from '../../assets/img/contributors/avatar1.jpg';
import avatar2 from '../../assets/img/contributors/avatar2.jpg';
import avatar3 from '../../assets/img/contributors/avatar3.jpg';
import avatar4 from '../../assets/img/contributors/avatar4.jpg';
import avatar5 from '../../assets/img/contributors/avatar5.jpg';

import {
  Container,
  Legend,
  Content,
  Item,
  ItemText,
  About,
  AboutText,
  Contributors,
  Contributor,
  Avatar,
  Name,
} from './styles';

export default function Help() {
  return (
    <Container>
      <Legend>Precisando de ajuda?</Legend>

      <Content>
        <Item>
          <Icon name="report-problem" color="#333" size={32} />
          <ItemText>Reportar problema</ItemText>
        </Item>

        <Item>
          <Icon name="star" color="#333" size={32} />
          <ItemText>Avaliar</ItemText>
        </Item>

        <Item>
          <Icon name="loyalty" color="#333" size={32} />
          <ItemText>Apoiar</ItemText>
        </Item>

        <Item>
          <Icon name="group" color="#333" size={32} />
          <ItemText>Sobre nós</ItemText>
        </Item>

        <About>
          <AboutText>
            TCC do curso técnico DS noturno da ETEC de Barueri
          </AboutText>
          <AboutText>Elaborado por:</AboutText>

          <Contributors>
            <Contributor>
              <Avatar source={avatar2} />
              <Name>Edvan Pereira</Name>
            </Contributor>

            <Contributor>
              <Avatar source={avatar3} />
              <Name>Indianara Brasilino</Name>
            </Contributor>

            <Contributor>
              <Avatar source={avatar4} />
              <Name>Matheus Pedroso</Name>
            </Contributor>

            <Contributor>
              <Avatar source={avatar1} />
              <Name>Pedro Ramos</Name>
            </Contributor>

            <Contributor>
              <Avatar source={avatar5} />
              <Name>Rodrigo Rodrigues</Name>
            </Contributor>
          </Contributors>
        </About>
      </Content>
    </Container>
  );
}
