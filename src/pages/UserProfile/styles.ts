import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .page-header .header-content {
    margin-bottom: 6.4rem;
  }
`;

export const UserInfos = styled.div`
  margin-top: -20rem;
  margin-bottom: 10rem;
  padding: 0 1rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text-in-primary);

  @media (min-width: 700px) {
    margin-top: -2rem;
    margin-left: 28rem;
    padding: 0 1.5rem;
    height: 25rem;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    color: var(--color-text-in-primary);
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -2rem;
  margin-bottom: 1rem;
  
  & .dropzone {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  & .icon {
    display: none;

    > img {
      width: 5rem;
      height: 5rem;
      border-radius: 3rem;
    }
  }
  
  @media (min-width: 700px) {
    width: 13rem;
    height: 13rem;
    margin: 0 auto;
    border-radius: 50rem;
    margin-top: -1.5rem;
    margin-bottom: 2.5rem;
    position: relative;

    & .icon {
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5rem;
      background-color: #04D361;
      border: 0;
      
      > img {
        width: 5rem;
        height: 5rem;
        border-radius: 5rem;
      }
      position: absolute;
      left: 11rem;
      bottom: -0.1rem;
    }
  }
`;

export const Name = styled.h1`
  font: 700 2.6rem Archivo;
  margin-bottom: 0.5rem;
`;

export const Subject = styled.span`
  font: 400 2rem Archivo;
`;

export const Main = styled.main`
  background-color: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;

  > label {
    color: var(--color-text-complement);
  }

  @media (min-width: 700px) {
    position: relative;
    .schedule-item {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      column-gap: 1.6rem;
    }
    .schedule-item .input-block {
      margin-top: 0 !important;
      margin-bottom: 10px;
    }
  }

`;

export const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  
  > button {
    background: none;
    border: none;
    width: 28rem;
    color: #E33D3D;
    font: 700 1.6rem Archivo;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #D70404;
    }
  }
`;

export const Line = styled.div`
  width: 80%;
  margin: 2rem 0;
  height: 1px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.title === 'light' ? theme.colors.lineInWhite : theme.colors.lineInWhite};
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;
  display: flex;
  align-items: center;
  flex-direction: row;

  & + fieldset {
    margin-top: 6.4rem;
  }

  > legend {
    font: 700 2.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
    
    > button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.title === 'light' ? theme.colors.primary : theme.colors.lineInWhite};
      font: 700 1.6rem Archivo;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.title === 'light' ? theme.colors.primaryLighter : theme.colors.primaryLighter};
      }
    }
  }

  .input-block + .textarea-block,
  .select-block + .input-block {
    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    padding: 0 6.4rem;

    & .name-inputs {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      input {
        width: 28.8rem;
      }
    }

    .contact-inputs {
      display: flex;
      flex-direction: row;
      margin: 2.4rem 0;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      
      input {
        width: 35rem;
      }

      & .whatsapp-input {
        width: 20rem;
      }
    }

    .input-block + .input-block, 
    .select-block + .input-block {
      margin-top: 0;
    }

    & .class-inputs {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      select {
        width: calc(100% + 5rem);
      }
    }
      
  }
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;

  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);

    > img {
      margin-right: 2rem;
    }
  }

  @media (min-width: 700px) {
    padding: 4.0rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      justify-content: space-between;
    } 
  }
`;

export const Button = styled.button`
  width: 100%;
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

  &:hover {
    background-color: var(--color-secundary-dark);
  }

  @media (min-width: 700px) {
    width: 20rem;
    margin-top: 0;
  }
`;
