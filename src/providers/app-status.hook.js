import React from 'react';
import MainBackground from '../assets/all-images/landscape-in-mountains.png';
function useAppStatus() {
  const [ready, setReady] = React.useState();
  React.useEffect(() => {
    const img = new Image();
    img.src = MainBackground;
    img.onload = () => {
      setReady(true);
    };
  }, []);
  return {
    ready,
  };
}

export { useAppStatus };
