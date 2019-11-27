import React from 'react';
import MainBackground from '../assets/all-images/landscape-in-mountains.png';
import Profile from '../assets/images/profile.png';
function useAppStatus() {
  const [ready, setReady] = React.useState(false);
  const [profileImageReady, setProfileImageReady] = React.useState(false);
  const [backgroundImageReady, setBackgroundImageReady] = React.useState(false);

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
      setProfileImageReady(true);
    };
    img.onload = () => {
      checkReady();
      setBackgroundImageReady(true);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ready,
    profileImageReady,
    backgroundImageReady,
  };
}

export { useAppStatus };
