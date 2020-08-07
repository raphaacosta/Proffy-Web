import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

  colors: {
    background: string;
    primaryLighter: string;
    primaryLight: string;
    primary: string;
    primaryDark: string;
    primaryDarker: string;
    secundary: string;
    secundaryDarker: string;
    titleInPrimary: string;
    textInPrimary: string;
    textTitle: string;
    textComplement: string;
    textBase: string;
    lineInWhite: string;
    inputBackground: string;
    buttonText: string;
    boxBase: string;
    boxFooter: string;
  },
  }
}