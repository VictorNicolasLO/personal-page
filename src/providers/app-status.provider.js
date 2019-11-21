import React, { createContext, useContext } from 'react';
import { useAppStatus } from './app-status.hook';

const appStatusContext = createContext({
  ready: false,
});

function AppStatusProvider({ children }) {
  const appStatus = useAppStatus();
  return (
    <appStatusContext.Provider value={appStatus}>
      {children}
    </appStatusContext.Provider>
  );
}

function useAppStatusProvider() {
  return useContext(appStatusContext);
}

export { useAppStatusProvider, AppStatusProvider };
