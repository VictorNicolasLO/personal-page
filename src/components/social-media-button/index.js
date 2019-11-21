import React from 'react';
import { SocialediaButtonContainer } from './styled';

function SocialediaButton({ src, href }) {
  return (
    <SocialediaButtonContainer>
      <a href={href}>
        <img width="50" src={src} alt="Profile" />
      </a>
    </SocialediaButtonContainer>
  );
}

export default SocialediaButton;
