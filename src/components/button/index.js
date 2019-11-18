import React from 'react';
import { ButtonContainer } from './styled';
import { useThemeCtx } from '../../ctx/theme.ctx';

function Button({ color, onClick, size, label, style }) {
  const {
    color: { primary, secondary },
  } = useThemeCtx();
  return (
    <ButtonContainer
      style={style}
      role="button"
      size={size}
      color={color}
      primaryColor={primary}
      secondaryColor={secondary}
      onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}

export default Button;
