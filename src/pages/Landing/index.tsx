import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import {
  Container,
  WebContentContainer,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  TotalConnections
} from './styles';

const Landing = () => {
  return (
    <Container>
      <WebContentContainer>
        <LogoContainer>
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        <HeroImage 
          src={landingImg} 
          alt="Plataforma de estudos"
        />

        <ButtonsContainer>
          <Link to="/study" className="study">
             <img src={studyIcon} alt="Estudar"/>
             Estudar 
          </Link>
          <Link to="/give-classes" className="give-classes">
             <img src={giveClassesIcon} alt="Dar aula"/>
             Dar aula
          </Link>
        </ButtonsContainer>

        <TotalConnections>
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
        </TotalConnections>
      </WebContentContainer>
    </Container>
  );
}

export default Landing;