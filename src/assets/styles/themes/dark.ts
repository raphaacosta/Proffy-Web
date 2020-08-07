import { shade, lighten } from 'polished';

export default {
  title: 'dark',

  colors: {
    background: '#191622',
    primaryLighter: lighten(0.15, '#483C67'),
    primaryLight: lighten(0.05, '#483C67'),
    primary: lighten(0.15, '#1a1622'),
    primaryDark: shade(0.08, '#483C67'),
    primaryDarker: shade(0.15, '#483C67'),
    secundary: shade(0.05, '#04BF58'),
    secundaryDarker: shade(0.15, '#04BF58'),
    titleInPrimary: '#FF79C6',
    textInPrimary: lighten(0.15, '#FF79C6'), 
    textTitle: '#BD93F9',
    textComplement: '#999999',
    textBase: shade(0.20, '#BD93F9'),
    lineInWhite: '#BD93F9',
    inputBackground: lighten(0.10, '#191622'),
    buttonText: '#202040',
    boxBase: '#483C67',
    boxFooter: lighten(0.05, '#1A1622'),
  }
}