import React, { useState } from 'react';
import { ProfilePhotoContainer } from './styled';

function ProfilePhoto({ src }) {
  const [imgReady, setImgReady] = useState(false);
  React.useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImgReady(true);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProfilePhotoContainer>
      {imgReady ? <img width="200" src={src} alt="Profile" /> : null}
    </ProfilePhotoContainer>
  );
}

export default ProfilePhoto;
