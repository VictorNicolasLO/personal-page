import React from "react";
import "./App.css";
import { ThemeProvider } from "./providers/theme.provider";
import { Router } from "react-router-dom";
import * as History from "history";
import MainRouter from "./router";
import { AppStatusProvider } from "./providers/app-status.provider";
import { FirestoreProvider } from "./providers/firestore-provider";
const history = History.createBrowserHistory();
function App() {
  const themeProps = {
    color: {
      primary: "#FFFFFF",
      secondary: "#262626",
    },
  };

  return (
    <AppStatusProvider>
      <FirestoreProvider>
        <ThemeProvider {...themeProps}>
          <Router history={history}>
            <MainRouter />
          </Router>
        </ThemeProvider>
      </FirestoreProvider>
    </AppStatusProvider>
  );
}

export default App;
