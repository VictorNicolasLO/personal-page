import React from 'react';
import './App.css';
import { ThemeProvider } from './providers/theme.provider';
import { Router } from 'react-router-dom';
import * as History from 'history';
import MainRouter from './router';
import { AppStatusProvider } from './providers/app-status.provider';
const history = History.createBrowserHistory();
function App() {
  const themeProps = {
    color: {
      primary: '#FFFFFF',
      secondary: '#262626',
    },
  };

  return (
    <AppStatusProvider>
      <ThemeProvider {...themeProps}>
        <Router history={history}>
          <MainRouter />
        </Router>
      </ThemeProvider>
    </AppStatusProvider>
  );
}

export default App;
