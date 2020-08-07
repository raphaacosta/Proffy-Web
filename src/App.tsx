import React from 'react';
import { ThemeProvider } from './hooks/theme';

import Routes from './routes';

import GlobalStyle from './assets/styles/global';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
