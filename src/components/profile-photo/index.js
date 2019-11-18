import React from 'react';
import { ProfilePhotoContainer } from './styled';

function ProfilePhoto({ src }) {
  return (
    <ProfilePhotoContainer>
      <img width="200" src={src} alt="Profile" />
    </ProfilePhotoContainer>
  );
}

export default ProfilePhoto;
