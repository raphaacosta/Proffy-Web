import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

// import './styles.css';

import {
  Container,
  Header,
  Footer,
  Button
} from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
          <Header>
            <img src="https://avatars0.githubusercontent.com/u/58230353?s=460&u=68d1fb0e85760ba9f47497bbc0c2cda703513d39&v=4" alt="Raphael Costa"/>
            <div>
              <strong>Raphael Costa</strong>
              <span>Química</span>
            </div>
          </Header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>
          <Footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <Button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </Button>
          </Footer>
        </Container>
  );
}

export default TeacherItem;