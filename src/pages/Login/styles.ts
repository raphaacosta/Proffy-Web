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

export const DefaultSide = styled.div`
  width: 100vw;
  height: 30vh;
  position: relative;
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

export const FormSide = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-background);

  @media (min-width: 700px) {
    width: 50vw;
    height: 100vh;

    justify-content: center;
  }
`;

export const Header = styled.div`
  width: 75vw;
  position: absolute;
  padding: 0 0.10rem;
  margin-top: 1rem;
  height: 30px;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 700px) {
    width: 35vw;
    top: 0;
    margin-top: 2.5rem;
    padding: 0 0.20rem;
  }

  @media (min-width: 1100px) {
    width: 28vw;
  }
`;

export const Form = styled.div`
  margin-top: 5rem;
  width: 80vw;
  height: 35.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  border-radius: 0.8rem;

  @media (min-width: 700px) {
    position: relative;
  }

  @media (min-width: 1100px){
    width: 30vw;
    
    > h1 {
      margin-bottom: 50px;
    }
  }
`;

export const Title = styled.div`
  width: 72vw;
  height: 5rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  > h1 {
    font: 700 2.8rem Archivo;
  }

  @media (min-width: 700px) {
    width: 35vw;
  }

  @media (min-width: 1100px) {
    width: 20vw;
    height: 10vh;
    justify-content: left;
  }
`;

export const InputContainer = styled.div`
  position: relative; 
  width: 78vw;
  
  > input {
    width: 100%;
    height: 4rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  & :first-child {
    border-radius: 0.8rem 0.8rem 0 0;
  }

  &.input-container + .input-container{
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
    width: 25vw;
    height: 5.6rem;
    margin-top: -17px;
  }

  @media (min-width: 1100px){
    margin: 0 auto;
    width: 20vw;
    
    > input {
      height: 5.6rem;
    }
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;

  & .check-container {
    display: block;
    position: relative;
    padding-left: 2.7rem;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    p {
      font: 400 1.6rem Archivo;
    }
  }

  & .check-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 2rem;
    width: 2rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.title === 'light' ? '#CCC' : '#EEE'};
  }

  & .check-container:hover input ~ .checkmark {
    background-color: ${({ theme }) => theme.title === 'light' ? '#999' : '#ccc'};
  }

  & .check-container input:checked ~ .checkmark {
    background-color: #04D361;
  }

  & .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  & .check-container input:checked ~ .checkmark:after {
    display: block;
  }

  & .check-container .checkmark:after {
    left: 0.6rem;
    top: 0.2rem;
    width: 0.5rem;
    height: 1rem;
    border: solid #E5E5E5;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  @media (min-width: 1100px) {
    & .check-container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      p {
        font: 400 2rem Archivo;
      }
    }

    & .check-container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    & .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.title === 'light' ? '#CCC' : '#EEE'};
    }

    & .check-container:hover input ~ .checkmark {
      background-color: ${({ theme }) => theme.title === 'light' ? '#999' : '#ccc'};
    }

    & .check-container input:checked ~ .checkmark {
      background-color: #04D361;
    }

    & .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    & .check-container input:checked ~ .checkmark:after {
      display: block;
    }

    & .check-container .checkmark:after {
      left: 0.8rem;
      top: 0.5rem;
      width: 0.5rem;
      height: 1rem;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    > label {
      margin-left: 10px;
    }
  }
`;

export const FormLinks = styled.div`
  margin-top: 1rem;
  width: 78vw;
  display: flex;
  justify-content: space-between;
  font: 400 1.6rem Archivo;

  > a {
    text-decoration: none;
    color: var(--color-text-base);
    font-weight: bold;
  }

  @media (min-width: 700px) {
    width: 25vw;
  }

  @media (min-width: 1400px) {
    width: 20vw;
    font-size: 1.4rem;
    font: 400 2rem Archivo;
  }
`;

export const Button = styled.button`
  width: 25rem;
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
  transition: background-color 0.2s;
  margin-top: 2.2rem;

  &:hover {
    background-color: var(--color-secundary-dark);
  }

  @media (min-width: 700px) {
    width: 25rem;
  }

  @media (min-width: 1400px) {
    width: 38rem;
  }
`;

export const PlusInformation = styled.div`
  margin-top: 2rem;
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: 400 Poppins;

  > p {
    > a {
      text-decoration: underline;
      color: var(--color-text-base);
      font-weight: bold;
    }
  }
  @media (min-width: 700px) {
    width: 25vw;
  }

  @media (min-width: 1400px) {
    width: 20vw;
    margin-top: 60px;
    font-size: 1.8rem;
  }
`;