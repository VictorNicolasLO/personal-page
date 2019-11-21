import React from 'react';
import MainBackground from '../assets/all-images/landscape-in-mountains.png';
import Profile from '../assets/images/profile.png';
function useAppStatus() {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    const img = new Image();
    const imgProfile = new Image();
    img.src = MainBackground;
    imgProfile.src = Profile;
    let counter = 0;
    function checkReady() {
      counter++;
      if (counter >= 2) setReady(true);
    }
    imgProfile.onload = () => {
      checkReady();
    };
    img.onload = () => {
      checkReady();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ready,
  };
}

export { useAppStatus };
