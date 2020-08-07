import React, { createContext, useContext } from 'react';
import { ThemeProvider as StyledProvider, DefaultTheme } from 'styled-components';

import light from '../assets/styles/themes/light';
import dark from '../assets/styles/themes/dark';
import usePersistedState from './usePersistedState';

interface ThemeContextProps {
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('light', light);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <StyledProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );
}

function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };