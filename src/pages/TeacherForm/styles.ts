import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .page-header .header-content {
    margin-bottom: 6.4rem;
  }
`;

export const Main = styled.main`
  background-color: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  > label {
    color: var(--color-text-complement);
  }

  @media (min-width: 700px) {
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

export const Avatar = styled.img`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 8.5rem;
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  & + fieldset {
    margin-top: 6.4rem;
  }

  & .data-groud {
    margin-bottom: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > span {
      margin-left: 2rem;
      margin-right: 8rem;
      font: 600 2.5rem Poppins;
    }
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
    &.input-block {
      margin-left: 5rem;
    }
  }

  @media (min-width: 700px) {
    padding: 0 6.4rem;
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