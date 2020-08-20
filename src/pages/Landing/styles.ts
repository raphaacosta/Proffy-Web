import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-primary);

  display: flex;
  flex-direction: column;
`;

export const TopBarContainer = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  padding: 0 1.6rem;
  display: flex;

  @media (min-width: 700px) {
    height: 55px;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  @media (min-width: 700px){
    max-width: 1250px;
  }
`;

export const UserProfile = styled(Link)`
  width: 17rem;
  height: 100%;
  text-decoration: none;
  display: flex;
  background: transparent;
  border: 0;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    margin-right: 0.5rem;
  }

  > p {
    display: none;
  }

  @media (min-width: 1100px) {
    > p {
      color: var(--color-text-in-primary);
      display: flex;
      font: 400 1.8rem Poppins;
    }
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 100%;

  @media (min-width: 1100px) {
    width: 170px;
  }
`;

export const LogOutButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem;
  
  > a {
    width: 5rem;
    height: 4.2rem;
    border-radius: 0.8rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.title === 'light' ? theme.colors.primaryDark : theme.colors.primaryDarker};

    text-decoration: none;

    transition: background-color 0.2s;
    
    > img {
      width: 2.8rem;
    }
  }
`;

export const LogoContainer = styled.div`
  > img {
    height: 5rem;
  }

  text-align: center;
  margin-bottom: 3.2rem;

  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media(min-width: 1100px) {
    align-self: center;
    margin: 0;
    text-align: left;

    > h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    > img {
      height: 100%;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100vw;
  height: 200vh;

  display: flex;
  align-items: center;
  align-items: center;
  flex-direction: row;
  border-radius: 0.8rem;
  color: var(--color-text-in-primary);
  
  @media (min-width: 700px) {
    width: 100vw;
    height: 60vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-primary);
  }
  
  @media (min-width: 1100px) {
    #page-landing-content {
      max-width: 1100px;
      justify-content: space-between;
    }
  }
`;

export const HeroImage = styled.img`
  display: none;
  margin-bottom: 10px;

  @media (min-width: 700px) {
    display: flex;
    margin-left: 12rem;
    width: 599px;
    height: 350px;
  }
`;

export const WebContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  align-items: center;
  justify-content: center;
  background: var(--color-background);

  @media (min-width: 1100px) {
    width: 100vw;
    height: 40vh;
    flex-direction: row;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 3.2rem 0;

  > a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2.0rem Archivo;
    
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;
    
    > img {
      width: 4rem;
      margin-right: 2.4rem;
    }
  }

  > a:first-child {
    margin-bottom: 1.6rem;
  }

  > a.study {
    background: var(--color-primary-lighter);

    &:hover {
      background: var(--color-primary-light);
    }
  }
  
  > a.give-classes {
    background: var(--color-secundary);

    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  @media (min-width: 700px) {
    flex-direction: row;

    > a:first-child {
      margin-right: 1.6rem;
      margin-bottom: 0;
    }
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: flex-start;
    max-width: 1100px;

    > a:first-child {
      margin-right: 1.6rem;
    }

    > a {
      font-size: 2.4rem;
    }
  }
`;

export const Message = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 400 2.0rem Poppins;

  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 700px){
    top: 10px;
    bottom: 10px;
    font-size: 2.2rem;
  }

  @media (min-width: 1100px) {
    font-size: 2.5rem;
    max-width: 220px;
    justify-content: flex-start;
  }

`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    max-width: 120px;
    margin-left: 20rem;
    margin-right: 5rem;
    text-align: center;
    justify-self: end;

    > img {
      margin-left: -1.8rem;
      margin-top: 1.8rem;
    }
  }
`;