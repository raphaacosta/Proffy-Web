import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  @media (min-width: 1100px) {
    height: 340px;
  }
`;

export const TopBarContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 1.6rem 0;
  display: flex; 
  background-color: ${({theme}) => theme.title === 'light' ? theme.colors.primaryDark : theme.colors.primaryDarker};

  @media (min-width: 700px) {
    height: 45px;
  }
`;

export const TopBar = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  color: var(--color-text-in-primary);

  a {
    height: 3.2rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  & .logo-switch-container {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    > img {
      margin-top: 5px;
      height: 1.6rem;
    }
  }

  @media (min-width: 700px){
    max-width: 1100px;

    & .logo-switch-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      > img {
        margin-left: 10px;
        height: 2.6rem;
      }
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40rem;
  height: 20rem;
  position: relative;

  > p {
    max-width: 25rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2.4rem;
  }

  > strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  @media (min-width: 700px) {
    > strong {
      max-width: 350px;
    }
  }
`;

export const Icon = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  height: 5rem;

  > p {
    max-width: 10rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    display: flex;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  > img {
    display: none;
  }

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    padding-bottom: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    > img {
      display: flex;
      margin-top: -3rem;
      margin-left: -7rem;
      width: 90rem;
    }
  }
`;