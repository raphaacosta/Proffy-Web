import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import logoDark from '../../assets/images/logo-dark.svg';
import backgrounImg from '../../assets/images/background.svg';
import SwitchComponent from '../../components/Switch';
import Modal from '../../components/Modal';

import {
  Container,
  FormSide,
  Header,
  Intro,
  Button,
  FormBox,
  InputContainer,
  DefaultSide,
  LogoContainer,
} from './styles';

const ResetPassword: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const [success, setSuccess] = useState(false);

  return (
    <Container>
      <FormSide>
        <Header>
          <SwitchComponent />
        </Header>
        <Intro>
          <h1>Bora redefinir a senha?</h1>
          <p>É aqui que a sua nova senha super secreta nasce!!!</p>
        </Intro>
        <FormBox>
          <InputContainer className="input-container">
            <input 
              placeholder="Nova senha"
              name="password" 
              type="password" 
              required 
            />
          </InputContainer>
          <InputContainer className="input-container">
            <input 
              placeholder="Confirme a senha"
              name="confirmpassword" 
              type="password" 
              required 
            />
          </InputContainer>
          <Button onClick={() => setSuccess(true)}>
            <Link to="/">
              Confirmar
            </Link>
          </Button>
        </FormBox>
      </FormSide>
      <DefaultSide>
        <img src={backgrounImg} alt="Background"/>
        <LogoContainer>
          {title === 'light' ? (
            <img src={logoImg} alt="Proffy"/>
          ) : (
            <img src={logoDark} alt="Proffy"/>
          )}
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
      </DefaultSide>
      {success && (
        <Modal 
          title="Senha redefinida com sucesso!" 
          description="Agora é só logar e utilizar a plataforma."
          buttonText="Voltar ao login"
          navigateTo="/"
          isAuthenticaded={false}
        />
      )}
    </Container>
  );
}

export default ResetPassword;