import styled from 'styled-components';

import backgroundImg from '../../assets/images/success-background.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items:center;
  justify-content: center;
  top: 0;
  background-color: var(--color-primary);
`;

export const ImageBox = styled.div`
  width: 90vw;
  position: absolute;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 700px) {
    background: url(${backgroundImg}) no-repeat center;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-title-in-primary);

  > p {
    max-width: 500px;
    margin-top: 10px;
    text-align: center;
  }

  > h1 {
    font-size: 25px;
  }

  @media(min-width: 500px) {
    > p{
      font-size: 20px;
    }

    > h1 {
      font-size: 30px;
      margin-top: 20px;
    }
  }

  @media(min-width: 700px) {
    max-width: 550px;
  }
`;

export const Button = styled.button`
  width: 60%;
  height: 5.6rem;
  background: var(--color-secundary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.6rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 3.2rem;

  > a {
    text-decoration: none;
  }

  &:hover {
    background-color: var(--color-secundary-dark);
  }
  
  @media (min-width: 500px) {
    width: 60%;
  }

  @media (min-width: 700px){
    width: 180px;
  }
`;