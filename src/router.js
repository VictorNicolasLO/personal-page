import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Playground from './routes/playground';
import Main from './routes/main';
import { useAppStatusProvider } from './providers/app-status.provider';
import { useThemeProvider } from './providers/theme.provider';
function MainRouter() {
  const { ready } = useAppStatusProvider();
  const {
    color: { secondary },
  } = useThemeProvider();
  if (!ready) {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          left: 0,
          top: 0,
          margin: 'auto',
          bottom: 0,
          right: 0,
          background: secondary,
        }}
      />
    );
  }
  return (
    <>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/playgroundd" component={Playground} />
      </Switch>
    </>
  );
}

export default MainRouter;
