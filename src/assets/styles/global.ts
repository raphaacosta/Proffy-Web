import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 60%;
  --color-background: ${props => props.theme.colors.background};
  --color-primary-lighter: ${({theme}) => theme.colors.primaryLighter};
  --color-primary-light: ${({theme}) => theme.colors.primaryLight};
  --color-primary: ${({theme}) => theme.colors.primary};
  --color-primary-dark: ${({theme}) => theme.colors.primaryDark};
  --color-primary-darker: ${({theme}) => theme.colors.primaryDarker};
  --color-secundary: ${({theme}) => theme.colors.secundary};
  --color-secundary-dark: ${({theme}) => theme.colors.secundaryDarker};
  --color-title-in-primary: ${({theme}) => theme.colors.titleInPrimary};
  --color-text-in-primary: ${({theme}) => theme.colors.textInPrimary};
  --color-text-title: ${({theme}) => theme.colors.textTitle};
  --color-text-complement: ${({theme}) => theme.colors.textComplement};
  --color-text-base: ${({theme}) => theme.colors.textBase};
  --color-line-in-white: ${({theme}) => theme.colors.lineInWhite};
  --color-input-background: ${({theme}) => theme.colors.inputBackground};
  --color-button-text: ${({theme}) => theme.colors.buttonText};
  --color-box-base: ${({theme}) => theme.colors.boxBase};
  --color-box-footer: ${({theme}) => theme.colors.boxFooter};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100vh;
}

body {
  background: var(--color-background);
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}

body,
input,
button,
textarea {
  font: 500 1.6rem Poppins;
  color: var(--color-text-base);
}

.container {
  width: 90vw;
  max-width: 700px;
}

@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
`;