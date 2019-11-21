import React, { createContext, useContext } from 'react';
import { useTheme } from './theme.hook';

const themeContext = createContext({
  color: {
    primary: 'white',
    secondary: 'red',
  },
});

function ThemeProvider({ color, children }) {
  const theme = useTheme({
    color,
  });
  return (
    <themeContext.Provider value={theme}>{children}</themeContext.Provider>
  );
}

function useThemeProvider() {
  return useContext(themeContext);
}

export { ThemeProvider, useThemeProvider };
