import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success-check-icon.svg';

import { 
  Container,
  ImageBox,
  Content,
  Button
} from './styles';

interface ModalProps {
  title: string;
  description: string;
  buttonText: string;
  navigateTo: string;
  isAuthenticaded: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <Container>
      <ImageBox>
        <Content>
          <img src={successIcon} alt="icone de sucesso"/>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </Content>
        <Button onClick={() => ( <Link to="/"/>)}>
          <Link to={props.navigateTo}>{props.buttonText}</Link>
        </Button>
      </ImageBox>
    </Container>
  );
}

export default Modal;