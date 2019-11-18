import React from 'react';
import { SocialediaButtonContainer } from './styled';

function SocialediaButton({ src }) {
  return (
    <SocialediaButtonContainer>
      <img width="50" src={src} alt="Profile" />
    </SocialediaButtonContainer>
  );
}

export default SocialediaButton;
