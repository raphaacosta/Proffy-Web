import React, { useContext, useState } from 'react';
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
  RegisterSide,
  Header,
  Intro,
  UserTypeContainer,
  Button,
  FormBox,
  InputContainer,
  DefaultSide,
  LogoContainer,
} from './styles';

const CreateUsers: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const [success, setSuccess] = useState(false);
  // const [accessType, setAccessType] = useState('');

  return (
    <Container>
      <RegisterSide>
        <Header>
          <Link to="/" >
            <img src={backIcon} alt="Voltar para home"/>
          </Link>
          <SwitchComponent />
        </Header>
        <Intro>
          <h1>Cadastro</h1>
          <p>Preencha os dados abaixo para começar.</p>
        </Intro>
        <UserTypeContainer>
          <label className="radio-container">
            <input type="radio" name="access-type" checked={true}/>
            <span className="checkmark"></span>
            <p>Proffy</p>
          </label>
          <label className="radio-container">
            <input type="radio" name="access-type"/>
            <span className="checkmark"></span>
            <p>Estudante</p>
          </label>
        </UserTypeContainer>
        <FormBox>
        <InputContainer className="input-container">
            <input 
              placeholder="Nome"
              name="first_name" 
              type="text" 
              required 
            />
          </InputContainer>
          <InputContainer className="input-container">
            <input 
              placeholder="Sobrenome"
              name="last_name" 
              type="text" 
              required 
            />
          </InputContainer>
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
          <Button onClick={() => setSuccess(true)}>
            <Link to="/">
              Concluir cadastro
            </Link>
          </Button>
        </FormBox>
      </RegisterSide>
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
          title="Cadastro Concluído" 
          description="Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência."
          buttonText="Fazer Login"
          navigateTo="/"
          isAuthenticaded={false}
        />
      )}
    </Container>
  );
}

export default CreateUsers;