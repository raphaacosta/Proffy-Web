import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import logoDark from '../../assets/images/logo-dark.svg';
import backgrounImg from '../../assets/images/background.svg';
import SwitchComponent from '../../components/Switch';
import backIcon from '../../assets/images/icons/back.svg';
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

const ForgotPassword: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const [success, setSuccess] = useState(false);
  
  return (
    <Container>
      <FormSide>
        <Header>
          <Link to="/login" >
            <img src={backIcon} alt="Voltar para home"/>
          </Link>
          <SwitchComponent />
        </Header>
        <Intro>
          <h1>Eita, esqueceu sua senha?</h1>
          <p>Não esquenta, vamos dar um jeito nisso.</p>
        </Intro>
        <FormBox>
          <InputContainer className="input-container">
            <input 
              placeholder="Email"
              name="email" 
              type="email" 
              required 
            />
          </InputContainer>
          <Button onClick={() => setSuccess(true)}>
            <Link to="/login">
              Enviar
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
          title="Redefinição enviada!" 
          description="Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos."
          buttonText="Voltar ao login"
          navigateTo="/login"
          isAuthenticaded={false}
        />
      )}
    </Container>
  );
}

export default ForgotPassword;