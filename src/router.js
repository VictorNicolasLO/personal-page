import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Playground from './routes/playground';
import Main from './routes/main';
function MainRouter() {
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
