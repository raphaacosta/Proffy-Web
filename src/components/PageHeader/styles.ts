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

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  > strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  > p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    margin-top: 68px;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > strong {
      max-width: 350px;
    }
  }
`;