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
  position: relative;
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

export const SwitchContainer = styled.div`
  display: flex;
  margin-top: 5px;
  position: relative;
  margin-left: 70vw;
  height: 3rem;
  width: 70px;

  @media (min-width: 700px) { 
    margin-top: -150px;
    margin-left: 30vw;
    margin-bottom: 150px;
  }
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (min-width: 700px) {
    margin-top: -40px;
    margin-bottom: 60px;
  }

  @media (min-width: 1400px) {
    margin-bottom: 60px;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
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
    width: calc(100% - 3.2rem);
    height: 2px;
    content:'';
    background: ${({ theme }) => theme.title === 'light' ? theme.colors.primaryLight : '#FF79C6'};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  @media (min-width: 700px) {
    width: 25vw;
    height: 5.6rem;
    margin-top: -17px;
  }

  @media (min-width: 1400px){
    width: 15vw;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  font-family: 400 2.0rem Poppins;

  > label {
    margin-left: 10px;
  }
`;

export const FormLinks = styled.div`
  margin-top: 20px;
  width: 78vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font: 400 1.6rem Poppins;

  > a {
    text-decoration: none;
    color: var(--color-text-base);
    font-weight: bold;
  }

  @media (min-width: 700px) {
    width: 25vw;
  }

  @media (min-width: 1400px) {
    width: 15vw;
    font-size: 1.4rem;
  }
`;

export const Button = styled.button`
  width: 80%;
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

  &:hover {
    background-color: var(--color-secundary-dark);
  }

  @media (min-width: 700px) {
    width: 25rem;
  }

  @media (min-width: 1400px) {
    width: 20rem;
  }
`;

export const PlusInformation = styled.div`
  /* margin-top: 15px; */
  margin-bottom: 20px;
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
    width: 15vw;
    margin-top: 60px;
    font-size: 1.8rem;
  }
`;