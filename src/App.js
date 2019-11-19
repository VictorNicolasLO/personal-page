import React from 'react';
import './App.css';
import { ThemeCtxProvider } from './ctx/theme.ctx';
import { Router } from 'react-router-dom';
import * as History from 'history';
import MainRouter from './router';
import { AppStatusProvider } from './ctx/app-status.ctx';
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
      <ThemeCtxProvider {...themeProps}>
        <Router history={history}>
          <MainRouter />
        </Router>
      </ThemeCtxProvider>
    </AppStatusProvider>
  );
}

export default App;
