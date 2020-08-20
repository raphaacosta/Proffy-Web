import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import logoDark from '../../assets/images/logo-dark.svg';
import backgrounImg from '../../assets/images/background.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import SwitchComponent from '../../components/Switch';

import {
  Container,
  DefaultSide,
  LogoContainer,
  FormSide,
  Header,
  Form,
  Title,
  Button,
  InputContainer,
  Checkbox,
  FormLinks,
  PlusInformation
} from './styles';

const Login: React.FC = () => {
  const { title } = useContext(ThemeContext);

  return(
    <Container>
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
      <FormSide>
        <Header>
          <SwitchComponent />
        </Header>
        <Form >
          <Title>
            <h1>Fazer Login.</h1>
          </Title>
          <InputContainer className="input-container">
            <input 
              placeholder="Email"
              name="email" 
              type="email" 
              required 
            />
          </InputContainer>
          <InputContainer className="input-container">
          <input
              placeholder="Senha" 
              name="password"  
              type="password" 
              required 
            />
          </InputContainer>
          <FormLinks>
            <Checkbox>
            <label className="check-container">
              <p>Lembrar-me</p>
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            </Checkbox>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </FormLinks>
          <Button type="submit" >
            <Link to="/home">
              Entrar
            </Link>
          </Button>
        </Form>
        <PlusInformation>
          <p>
            Não tem conta? <br/>
            <Link to="/users">
              Cadastre-se
            </Link>
          </p>
          <p>
            É de graça <img src={purpleHeartIcon} alt="Coração roxo"/>
          </p>
        </PlusInformation>
      </FormSide>
    </Container>
  );
}

export default Login;