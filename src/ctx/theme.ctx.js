import React, { createContext, useContext } from 'react';

const themeContext = createContext({
  color: {
    primary: 'white',
    secondary: 'red',
  },
});

function ThemeCtxProvider({ color, children }) {
  const value = {
    color,
  };
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}

function useThemeCtx() {
  return useContext(themeContext);
}

export { ThemeCtxProvider, useThemeCtx };
