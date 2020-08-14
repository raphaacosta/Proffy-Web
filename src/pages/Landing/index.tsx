import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import logoDark from '../../assets/images/logo-dark.svg';
import landingImg from '../../assets/images/landing.svg';
import landingDark from '../../assets/images/landing-dark.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import studyIconDark from '../../assets/images/icons/study-dark.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import giveClassesIconDark from '../../assets/images/icons/giveclasses-dark.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import logOutIcon from '../../assets/images/icons/sair.svg';

import api from '../../services/api';

import {
  Container,
  ContentContainer,
  LogOutButton,
  SwitchContainer,
  WebContentContainer,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  Message,
  TotalConnections,
  TopBarContainer,
  TopBar,
  UserProfile
} from './styles';
import { ThemeContext } from 'styled-components';
import SwitchComponent from '../../components/Switch';

const Landing = () => {
  const { title } = useContext(ThemeContext);
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);

  return (
    <Container>
      <TopBarContainer>
        <TopBar>
          <UserProfile to="/user-profile">
            <img src="https://github.com/raphaacosta.png" alt="User Avatar"/>
            <p>Raphael Costa</p>
          </UserProfile>
          <SwitchContainer>
            <LogOutButton>
              <Link to="/login">
                <img src={logOutIcon} alt="Sair"/>
              </Link>
            </LogOutButton>
            <SwitchComponent />
          </SwitchContainer>
        </TopBar>
      </TopBarContainer>
    <ContentContainer>
      <WebContentContainer>
        <LogoContainer>
          {title === 'light' ? (
            <img src={logoImg} alt="Proffy"/>
          ) : (
            <img src={logoDark} alt="Proffy"/>
          )}
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        { title === 'light' ? (
          <HeroImage 
            src={landingImg} 
            alt="Plataforma de estudos"
          />
        ) : (
          <HeroImage 
            src={landingDark} 
            alt="Plataforma de estudos"
          />
        )}
        <Message>
          <p>Seja bem-vindo.<br/>
            <strong> O que deseja fazer?</strong>
          </p>
        </Message>
        <TotalConnections>
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
        </TotalConnections>
        <ButtonsContainer>
          <Link to="/study" className="study">
             {title === 'light' ? (
               <img src={studyIcon} alt="Estudar"/>
             ) : (
                <img src={studyIconDark} alt="Estudar"/>
             )}
             Estudar 
          </Link>
          <Link to="/give-classes" className="give-classes">
             {title === 'light' ? (
               <img src={giveClassesIcon} alt="Dar aula"/>
             ) : (
              <img src={giveClassesIconDark} alt="Dar aula"/>
             )}
             Dar aula
          </Link>
        </ButtonsContainer>
      </WebContentContainer>
    </ContentContainer>
    </Container>
  );
}

export default Landing;