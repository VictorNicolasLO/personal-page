import React, { createContext, useContext, useEffect, useState } from 'react';

const appStatusContext = createContext({
  loaded: false,
});

function AppStatusProvider({ color, children }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);
  const value = {
    loaded,
  };
  return (
    <appStatusContext.Provider value={value}>
      {children}
    </appStatusContext.Provider>
  );
}

function useAppStatusCtx() {
  return useContext(appStatusContext);
}

export { AppStatusProvider, useAppStatusCtx };
