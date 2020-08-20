import styled from 'styled-components';

import backgroundImg from '../../assets/images/background.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const RegisterSide = styled.div`
  width: 100vw;
  height: 70vh;
  text-align: left;
  background: var(--color-background);

  @media (min-width: 700px) {
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Header = styled.div`
  margin-top: 20px;
  width: 75vw;
  padding: 0 0.10rem;
  margin: 0 auto;
  height: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (min-width: 700px) {
    width: 35vw;
    align-self: center;
    position: fixed;
    margin-top: 20px;
    padding: 0 0.20rem;
    top: 0;
  }

  @media (min-width: 1100px) {
    width: 28vw;
  }
`;

export const Intro = styled.div`
  width: 72vw;
  height: 15vh;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  flex-direction: column;
  align-items: left;
  text-align: left;
  justify-content: start;

  > h1 {
    font: 700 2.8rem Archivo;
    margin-bottom: 10px;
  }

  > p {
    font: 400 1.8rem Archivo;
    color: var(--color-text-base);
  }

  @media (min-width: 700px) {
    width: 35vw;
  }

  @media (min-width: 1100px) {
    width: 28vw;
    margin-bottom: 50px;
    height: 10vh;
    justify-content: left;

    > p {
      max-width: 190px;
    }
  }
`;

export const UserTypeContainer = styled.div`
  width: 70vw;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  font: 400 2rem Archivo;
  justify-content: space-between;

  & .radio-container {
    display: block;
    padding: 0 1.6rem;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  & .radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & .checkmark {
    position: absolute;
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.title === 'light' ? '#CCC' : '#EEE'};
  }

  & .radio-container:hover input ~ .checkmark {
    background-color: ${({ theme }) => theme.title === 'light' ? '#999' : '#ccc'};
  }

  & .radio-container input:checked ~ .checkmark {
    background-color: #04D361;
  }

  & .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  & .radio-container input:checked ~ .checkmark:after {
    display: flex;
  }

  & .radio-container .checkmark:after {
    top: 0.6rem;
    left: 0.6rem;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    background: #FFF;
  }

  @media (min-width: 700px) {
    width: 35vw;
    margin-bottom: 40px;
  }

  @media (min-width: 1100px) {
    width: 28vw;
    margin-bottom: 0;
  }
`;

export const FormBox = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  width: 70vw;
  height: 40vh;

  @media (min-width: 700px){ 
    width: 35vw;
    height: 50vh;
  }

  @media (min-width: 1400px) {
    height: 40vh;
    width: 30;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 70vw;
  
  > input {
    width: 100%;
    height: 4rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  &.input-container:first-child {
    > input {border-radius: 0.8rem 0.8rem 0 0;}
  }

  &.input-container + .input-container {
    > input {border-radius: 0;}
  }

  &.input-container:last-of-type {
    > input {border-radius: 0 0 0.8rem 0.8rem;}
  }

  &:focus-within::after {
    width: 0.4rem;
    height: calc(100% - 2.2rem);
    content:'';
    background: ${({ theme }) => theme.title === 'light' ? theme.colors.primaryLight : '#FF79C6'};
    position: absolute;
    border-radius: 0.8rem;
    left: 0;
    top: 1.2rem;
    bottom: 1.6rem;
  }

  @media (min-width: 700px) {
    width: 35vw;
    height: 5.6rem;
    margin-top: -17px;
  }

  @media (min-width: 1100px){
    margin: 0 auto;
    width: 28vw;
    
    > input {
      height: 5.6rem;
    }
  }
`;

export const Button = styled.button`
  width: 26rem;
  height: 4.6rem;
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

  @media (min-width: 700px) {
    width: 35vw;
    height: 5.6rem;
  }

  @media (min-width: 1100px) {
    width: 28vw;
  }
`;

export const DefaultSide = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  
  > img {
    display: none;
  }

  @media (min-width: 700px) {
    width: 50vw;
    height: 100vh;
  }
`;

export const LogoContainer = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  > img {
    height: 2.5rem;
  }

  > h2 {    
    max-width: 170px;
    text-align: justify;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 1.8rem;
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    > img {
      height: 4.5rem;
    }

    > h2 {
      max-width: 270px;
    }
  }

  @media (min-width: 1100px) {
    background: url(${backgroundImg}) no-repeat center;
    > img {
      height: 10.0rem;
    }

    > h2 {
      font-size: 4.4rem;
      max-width: 350px;
    }
  }
`;